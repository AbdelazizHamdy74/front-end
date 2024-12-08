import { Component } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { GeneralTabComponent } from '../general-tab/general-tab.component';
import { ContractTabComponent } from '../contract-tab/contract-tab.component';
import { NoteTabComponent } from '../note-tab/note-tab.component';
import { UserTabComponent } from '../user-tab/user-tab.component';
@Component({
  selector: 'app-related-tabs',
  standalone: true,
  imports: [TabViewModule,GeneralTabComponent,ContractTabComponent,NoteTabComponent,UserTabComponent],
  templateUrl: './related-tabs.component.html',
  styleUrl: './related-tabs.component.css'
})
export class RelatedTabsComponent {

}
