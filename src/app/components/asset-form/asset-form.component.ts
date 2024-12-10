// import { Component } from '@angular/core';
// import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ButtonModule } from 'primeng/button';
// import { InputTextModule } from 'primeng/inputtext';
// import { DropdownModule } from 'primeng/dropdown';
// import { InputTextareaModule } from 'primeng/inputtextarea';
// import { RelatedTabsComponent } from '../related-tabs/related-tabs.component';
// import { DividerModule } from 'primeng/divider';

// @Component({
//   selector: 'app-asset-form',
//   standalone: true,
//   imports: [ReactiveFormsModule,DividerModule ,ButtonModule, InputTextModule, InputTextareaModule, DropdownModule, RelatedTabsComponent],
//   templateUrl: './asset-form.component.html',
//   styleUrl: './asset-form.component.css'
// })
// export class AssetFormComponent {
//  myForm!: FormGroup;

//  assetTypes = [
//   { label: 'Laptop', value: 'laptop' },
//   { label: 'Phone', value: 'phone' },
//   { label: 'Tablet', value: 'tablet' },
// ];
// services = [
//   { label: 'Laptop', value: 'laptop' },
//   { label: 'Phone', value: 'phone' },
// ];
// productSubCategories  = [
//   { label: 'Option 1', value: 'option1' },
//   { label: 'Option 2', value: 'option2' },
// ];
// priorities = [
//   { label: 'P1', value: 'p1' },
//   { label: 'P2', value: 'p2' },
// ];
// supportedOptions  = [
//   { label: 'Yes', value: 'yes' },
//   { label: 'No', value: 'no' },
// ];
// assetStatuses = [
//   { label: 'Active', value: 'active' },
//   { label: 'Inactive', value: 'inactive' },
// ];
//  constructor(private fb: FormBuilder) {
//   this.myForm = this.fb.group({
//     assetType: ['', Validators.required],
//     assetName: ['', Validators.required],
//     serialNumber: ['', Validators.required],
//     service: ['', Validators.required],
//     productCategory: ['', Validators.required],
//     productSubCategory1: ['', Validators.required],
//     productSubCategory2: ['', Validators.required],
//     priority: ['', Validators.required],
//     description: ['', Validators.required],
//     supported: ['', Validators.required],
//     assetStatus: ['', Validators.required],
//     attachImage: ['', Validators.required],
//   });
// }
// onSubmit() {
//   if (this.myForm.valid) {
//     console.log('Form Submitted:', this.myForm.value);
//   } else {
//     console.log('Form is invalid');
//   }
// }

// }

// import { Component } from '@angular/core';
// import { ActivatedRoute, Router, RouterModule } from '@angular/router';
// import { CommonModule, DatePipe } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { AssetService } from '../../asset-console/asset.service';
// import { RouterModule } from '@angular/router';
// import { ButtonModule } from 'primeng/button';
// import { TableModule } from 'primeng/table';

// import { Component } from '@angular/core';
// import {
//   ReactiveFormsModule,
//   FormBuilder,
//   FormGroup,
//   Validators,
// } from '@angular/forms';
// import { ButtonModule } from 'primeng/button';
// import { InputTextModule } from 'primeng/inputtext';
// import { DropdownModule } from 'primeng/dropdown';
// import { InputTextareaModule } from 'primeng/inputtextarea';
// import { RelatedTabsComponent } from '../related-tabs/related-tabs.component';
// import { DividerModule } from 'primeng/divider';

// @Component({
//   selector: 'app-asset-console',
//   standalone: true,
//   imports: [
//     CommonModule,
//     FormsModule,
//     RouterModule,
//     ButtonModule,
//     TableModule,
//     RelatedTabsComponent,
//     ReactiveFormsModule,
//     DividerModule,
//     ButtonModule,
//     InputTextModule,
//     InputTextareaModule,
//     DropdownModule,
//     RelatedTabsComponent,
//   ],

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
      // contract_id: ['', Validators.required],
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
