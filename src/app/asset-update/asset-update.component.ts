// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router, RouterModule } from '@angular/router';
// import { AssetService } from '../asset-console/asset.service';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { DropdownModule } from 'primeng/dropdown';
// import { ButtonModule } from 'primeng/button';
// import { CheckboxModule } from 'primeng/checkbox';
// import { InputTextModule } from 'primeng/inputtext';
// import { InputTextareaModule } from 'primeng/inputtextarea';

// @Component({
//   selector: 'app-asset-update',
//   standalone: true,
//   imports: [
//     CommonModule,
//     FormsModule,
//     RouterModule,
//     DropdownModule,
//     ButtonModule,
//     CheckboxModule,
//     InputTextModule,
//     InputTextareaModule,
//   ],
//   templateUrl: './asset-update.component.html',
//   styleUrls: ['./asset-update.component.css'],
// })
// export class AssetUpdateComponent implements OnInit {
//   asset: any = {}; //   save the asset data
//   statuses: string[] = ['New', 'In Inventory', 'Deployed', 'Decommissioned'];
//   priorities: string[] = ['High', 'Medium', 'Low'];
//   isLoading = false;
//   assetId: string | null;

//   constructor(
//     private assetService: AssetService,
//     private route: ActivatedRoute,
//     private router: Router
//   ) {
//     this.assetId = this.route.snapshot.params['id'];
//   }

//   ngOnInit(): void {
//     const assetId = this.route.snapshot.paramMap.get('id');
//     if (assetId) {
//       this.loadAssetDetails(assetId);
//     } else {
//       alert('Invalid asset ID.');
//       this.router.navigate(['/assets']);
//     }
//   }
//   loadAssetDetails(assetId: string): void {
//     this.isLoading = true;
//     this.assetService.getAssetById(assetId).subscribe({
//       next: (response) => {
//         // console.log('Asset data fetched:', response);
//         this.asset = response;
//         this.isLoading = false;
//       },
//       error: (error) => {
//         console.error('Error fetching asset:', error);
//         alert('Failed to load asset details. Please try again later.');
//         this.isLoading = false;
//       },
//     });
//   }
//   updateAsset(): void {
//     if (
//       !this.asset.product_category_id ||
//       !this.asset.product_sub_category_id ||
//       !this.asset.service_id ||
//       !this.asset.asset_name ||
//       !this.asset.status ||
//       !this.asset.priority
//       // !this.asset.supported ||
//       // !this.asset.description
//     ) {
//       alert('Please fill in all required fields.');
//       return;
//     }
//     if (!this.asset.id) {
//       alert('Asset ID is missing!');
//       return;
//     }
//     console.log('Updating asset:', this.asset);
//     this.isLoading = true;

//     this.assetService.updateAsset(this.asset.id, this.asset).subscribe({
//       next: () => {
//         alert('Asset updated');
//         console.log('Asset updated successfully!');
//         this.isLoading = false;
//         this.router.navigate(['/asset']);
//       },
//       error: (error) => {
//         console.error('Error updating asset:', error.message);
//         alert('Failed to update asset. Please try again.');
//         this.isLoading = false;
//         // this.router.navigate(['/asset']);
//       },
//     });
//   }
// }

//
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssetService } from '../asset-console/asset.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
  selector: 'app-asset-update',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    InputTextareaModule,
  ],
  templateUrl: './asset-update.component.html',
  styleUrls: ['./asset-update.component.css'],
})
export class AssetUpdateComponent implements OnInit {
  asset: any = {}; // save the asset data
  statuses: string[] = ['New', 'In Inventory', 'Deployed', 'Decommissioned'];
  priorities: string[] = ['High', 'Medium', 'Low'];
  isLoading = false;
  assetId: string | null;
  selectedFile: File | null = null; //  to save the updated file

  constructor(
    private assetService: AssetService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.assetId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    const assetId = this.route.snapshot.paramMap.get('id');
    if (assetId) {
      this.loadAssetDetails(assetId);
    } else {
      alert('Invalid asset ID.');
      this.router.navigate(['/assets']);
    }
  }

  loadAssetDetails(assetId: string): void {
    this.isLoading = true;
    this.assetService.getAssetById(assetId).subscribe({
      next: (response) => {
        this.asset = response;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching asset:', error);
        alert('Failed to load asset details. Please try again later.');
        this.isLoading = false;
      },
    });
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0]; //   save the uploaded file
  }

  updateAsset(): void {
    if (
      !this.asset.product_category_id ||
      !this.asset.product_sub_category_id ||
      !this.asset.service_id ||
      !this.asset.asset_name ||
      !this.asset.status ||
      !this.asset.priority
    ) {
      alert('Please fill in all required fields.');
      return;
    }
    if (!this.asset.id) {
      alert('Asset ID is missing!');
      return;
    }

    // formData to send data with image
    const formData = new FormData();
    formData.append('product_category_id', this.asset.product_category_id);
    formData.append(
      'product_sub_category_id',
      this.asset.product_sub_category_id
    );
    formData.append('service_id', this.asset.service_id);
    formData.append('asset_name', this.asset.asset_name);
    formData.append('status', this.asset.status);
    formData.append('priority', this.asset.priority);
    formData.append('supported', this.asset.supported ? 'true' : 'false');
    formData.append('description', this.asset.description);

    // إذا تم تحديد صورة جديدة، أضفها إلى FormData
    // if selected a new image, add it to the FormData
    if (this.selectedFile) {
      formData.append(
        'attach_image',
        this.selectedFile,
        this.selectedFile.name
      );
    }

    this.isLoading = true;

    this.assetService.updateAsset(this.asset.id, formData).subscribe({
      next: () => {
        alert('Asset updated');
        this.isLoading = false;
        this.router.navigate(['/assetConsole']);
      },
      error: (error) => {
        console.error('Error updating asset:', error.message);
        alert('Failed to update asset. Please try again.');
        this.isLoading = false;
      },
    });
  }
}
