import { Component } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { NoteTabComponent } from '../note-tab/note-tab.component';
import { RelateAssetTabComponent } from '../relate-asset-tab/relate-asset-tab.component';
import { RelateUserTabComponent } from '../relate-user-tab/relate-user-tab.component';
import { RelateGeneralTabComponent } from '../relate-general-tab/relate-general-tab.component';
@Component({
  selector: 'app-contract-relate-tabs',
  standalone: true,
  imports: [
    TabViewModule,
    NoteTabComponent,
    RelateGeneralTabComponent,
    RelateAssetTabComponent,
    RelateUserTabComponent,
  ],
  templateUrl: './contract-relate-tabs.component.html',
  styleUrl: './contract-relate-tabs.component.css',
})
export class ContractRelateTabsComponent {}
