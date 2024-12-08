import { Component } from '@angular/core';
import { RelatedTabsComponent } from '../../components/related-tabs/related-tabs.component';
// import { AssetFormComponent } from "../../components/asset-form/asset-form.component";
// import { CreateAssetComponent } from '../../components/asset-form/asset-form.component';
import { CreateAssetComponent } from '../../components/asset-form/asset-form.component';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-create-request',
  standalone: true,
  imports: [CreateAssetComponent, NavbarComponent],
  templateUrl: './create-request.component.html',
  styleUrl: './create-request.component.css',
})
export class CreateRequestComponent {}
