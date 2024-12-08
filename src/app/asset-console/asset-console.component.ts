import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AssetService } from './asset.service';
// import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-asset-console',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, ButtonModule, TableModule],
  templateUrl: './asset-console.component.html',
  styleUrls: ['./asset-console.component.css'],
  providers: [DatePipe],
})
// export class AssetConsoleComponent {
//   assets: any[] = [];
//   filters: any = {
//     asset_name: '',
//     asset_type: '',
//     status: '',
//     serial_number: '',
//     hrId: '',
//   };

//   constructor(
//     private assetService: AssetService,
//     private datePipe: DatePipe,
//     private router: Router
//   ) {}

// fetchAssets(): void {
//   // console.log(this.filters);

//   this.assetService.getAssets(this.filters).subscribe({
//     next: (response: any) => {
//       this.assets = response.data;
//       // console.log(this.assets);
//     },
//     error: (error) => {
//       console.error('Error fetching assets:', error);
//     },
//   });
// }
//   ngOnInit() {
//     this.assetService.getAssets(this.filters).subscribe({
//       next: (response: any) => {
//         this.assets = response.data;
//         // console.log(this.assets);
//       },
//       error: (error) => {
//         console.error('Error fetching assets:', error);
//       },
//     });
//   }
//   navigateToAbout(id: string) {
//     this.router.navigate(['/update/', id]);
//     console.log('click to update');
//   }
// }
export class AssetConsoleComponent {
  assets: any[] = [];
  filters: any = {};
  selectedFilter: string = '';
  searchValue: string = '';

  constructor(private assetService: AssetService, private router: Router) {}

  ngOnInit() {
    this.fetchAssets();
  }

  fetchAssets(): void {
    this.assetService.getAssets(this.filters).subscribe({
      next: (response: any) => {
        this.assets = response.data;
      },
      error: (error) => {
        console.error('Error fetching assets:', error);
      },
    });
  }

  applyFilter(): void {
    if (this.selectedFilter && this.searchValue) {
      this.filters[this.selectedFilter] = this.searchValue;
    }
    this.fetchAssets();
  }

  resetFilter(): void {
    this.selectedFilter = '';
    this.searchValue = '';
    this.filters = {};
    this.fetchAssets();
  }

  navigateToAbout(id: string) {
    this.router.navigate(['/update/', id]);
  }
}
