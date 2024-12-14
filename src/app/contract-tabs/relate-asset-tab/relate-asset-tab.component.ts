import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

interface column {
  field: string;
  header: string;
}
@Component({
  selector: 'app-relate-asset-tab',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './relate-asset-tab.component.html',
  styleUrl: './relate-asset-tab.component.css',
})
export class RelateAssetTabComponent {
  assets!: any[];
  cols!: column[];
  ngOnInit(): void {
    this.cols = [
      { field: 'relationships', header: 'Relationship Type' },
      { field: 'assetName', header: 'Asset Name' },
      { field: 'itemType', header: 'Item Type' },
      { field: 'status', header: 'Status' },
    ];
    this.assets = [
      {
        relationships: 'Attached To',
        assetName: 'hp',
        itemType: 'configuration item ',
        status: 'deployed',
      },
      {
        relationships: 'Attached To',
        assetName: 'samsung',
        itemType: 'configuration item ',
        status: 'deployed',
      },
    ];
  }
}
