import { Component,Input  } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { AssetService } from '../../asset-console/asset.service';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

interface column {
  field: string;
  header: string;
}
@Component({
  selector: 'app-relate-asset-tab',
  standalone: true,
  imports: [TableModule,CommonModule,DialogModule,ButtonModule,FormsModule],
  providers: [AssetService],
  templateUrl: './relate-asset-tab.component.html',
  styleUrl: './relate-asset-tab.component.css',
})
export class RelateAssetTabComponent {
  assets!: any[];
  allAssets!: any[];
  cols!: column[];
  selectedAssets:any[]=[];
  visible: boolean = false;
  @Input() contractId: any;
 constructor(private assetService: AssetService) {}
 showDialog() {
  console.log('Dialog opened');
  this.visible = true;
}
selectAsset(asset: any) {
  console.log(asset);
  // this.contractSelected.emit(this.selectedContracts[0].id);
  console.log("added asset")

}
  ngOnInit(): void {
    this.cols = [
      { field: 'asset_name', header: 'Asset Name' },
      { field: 'asset_type', header: 'Type' },
      { field: 'companyName', header: 'Company' },
      { field: 'status', header: 'Status' },
    ];
    this.assetService.getbyContractId(this.contractId).subscribe({
      next: (response: any) => {
        this.assets = response.assets;
        console.log(response);
      },
      error: (error) => {
        console.error('Error fetching assets:', error);
      },
      // complete: () => {
      //   console.log('Assets fetched successfully');
      // },
    });
    this.assetService.getAssets({}).subscribe({
      next: (response: any) => {
        this.allAssets = response.data;
        console.log(this.allAssets);
      },
      error: (error) => {
        console.error('Error fetching assets:', error);
      },
      // complete: () => {
      //   console.log('Assets fetched successfully');
      // },
    })
  }
  getAssets() {
   
  }
}
