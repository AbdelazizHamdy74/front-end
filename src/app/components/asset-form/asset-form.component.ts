import { AssetService } from '../../asset-console/asset.service';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import { GeneralTabComponent } from '../general-tab/general-tab.component';
import { ContractTabComponent } from '../contract-tab/contract-tab.component';
import { NoteTabComponent } from '../note-tab/note-tab.component';
import { UserTabComponent } from '../user-tab/user-tab.component';
import { InputTextareaModule } from 'primeng/inputtextarea'; //
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';

//
//

import { ActivatedRoute } from '@angular/router';
import { TableModule } from 'primeng/table';
import { RelatedTabsComponent } from '../related-tabs/related-tabs.component';
import { DividerModule } from 'primeng/divider';
//
//

@Component({
  selector: 'app-asset-form',
  standalone: true,
  templateUrl: './asset-form.component.html',
  styleUrls: ['./asset-form.component.css'],
  providers: [AssetService],
  imports: [
    CommonModule,
    TabViewModule,
    GeneralTabComponent,
    ContractTabComponent,NoteTabComponent,UserTabComponent,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    CheckboxModule,
    InputTextareaModule,
    // BrowserAnimationsModule,
    // NoopAnimationsModule,
    RouterModule,
    FormsModule,
    TableModule,
    // RelatedTabsComponent,
    DividerModule,
    // ActivatedRoute,
  ],
})
export class CreateAssetComponent {
  assetForm: FormGroup;
  selectedAssetType: any;

  assetTypes = [
    { label: 'Hardware', value: 'Hardware' },
    { label: 'Software', value: 'Software' },
  ];

  supportedOptions = [
    { label: 'Yes', value: 1 },
    { label: 'No', value: 0 },
  ];

  statusOptions = [
    { label: 'New', value: 'New' },
    { label: 'In Inventory', value: 'In Inventory' },
    { label: 'Deployed', value: 'Deployed' },
    { label: 'Decommissioned', value: 'Decommissioned' },
  ];

  priorityOptions = [
    { label: 'High', value: 'High' },
    { label: 'Medium', value: 'Medium' },
    { label: 'Low', value: 'Low' },
  ];
  
  constructor(
    private fb: FormBuilder,
    private assetService: AssetService,
    private router: Router
  ) {
    this.assetForm = this.fb.group({
      user_id: ['', Validators.required],
      contract_id: ['', Validators.required],
      productCategoryName: ['', Validators.required],
      productSubCategoryName: ['', Validators.required],
      companyName: ['', Validators.required],
      AssetSite: ['', Validators.required],
      serviceName: ['', Validators.required],
      notes_id: [''],
      asset_name: ['', Validators.required],
      serial_number: ['', Validators.required],
      asset_type: ['', Validators.required],
      status: ['', Validators.required],
      priority: ['', Validators.required],
      supported: [false, Validators.required],
      attach_image: [''],
      description: [''],
      isDeleted: [false],
    });
  }

  getCompanyAndSite(data: any) {
    this.assetForm.get('companyName')?.setValue(data.company);
    this.assetForm.get('AssetSite')?.setValue(data.site);
  }
  getNoteId(noteId: string) {
   this.assetForm.get('notes_id')?.setValue(noteId);
 }
 getContractId(contractId:string){
  this.assetForm.get('contract_id')?.setValue(contractId);

 }
 getUserId(userId: string) {
   this.assetForm.get('user_id')?.setValue(userId);
 }
  onSubmit(): void {
    if (this.assetForm.valid) {
      const formData = new FormData();
      Object.keys(this.assetForm.value).forEach((key) => {
        if (key === 'attach_image' && this.assetForm.get(key)?.value) {
          formData.append(key, this.assetForm.get(key)?.value); // التأكد من رفع الصورة
        } else {
          formData.append(key, this.assetForm.get(key)?.value || ''); // الحقول الأخرى
        }
      });

      this.assetService.createAsset(formData).subscribe({
        next: () => this.router.navigate(['/assetConsole']),
        error: (err) => console.error('Error creating asset:', err),
      });
    }
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.assetForm.patchValue({
        attach_image: input.files[0],
      });
    }
  }

  // onSubmit(): void {
  //   if (this.assetForm.valid) {
  //     // alert('Asset has been Created');
  //     this.assetService.createAsset(this.assetForm.value).subscribe({
  //       next: () => this.router.navigate(['/asset']),
  //       error: (err) => console.error('Error creating asset:', err),
  //     });
  //   }
  // }
}