// import { Component } from '@angular/core';
// import {
//   FormBuilder,
//   FormGroup,
//   ReactiveFormsModule,
//   Validators,
// } from '@angular/forms';
// import { ContractService } from '../contract.service';
// import { Router } from '@angular/router';
// import { DropdownModule } from 'primeng/dropdown';
// import { InputTextModule } from 'primeng/inputtext';
// import { InputTextareaModule } from 'primeng/inputtextarea';
// import { ButtonModule } from 'primeng/button';
// import { TableModule } from 'primeng/table';
// import { TabViewModule } from 'primeng/tabview';

// //
// import { NoteTabComponent } from '../contract-tabs/note-tab/note-tab.component';
// import { RelateAssetTabComponent } from '../contract-tabs/relate-asset-tab/relate-asset-tab.component';
// import { RelateUserTabComponent } from '../contract-tabs/relate-user-tab/relate-user-tab.component';
// import { RelateGeneralTabComponent } from '../contract-tabs/relate-general-tab/relate-general-tab.component';

// @Component({
//   selector: 'app-create-contract',
//   standalone: true,
//   templateUrl: './create-contract.component.html',
//   styleUrls: ['./create-contract.component.css'],
//   imports: [
//     ReactiveFormsModule,
//     InputTextModule,
//     InputTextareaModule,
//     DropdownModule,
//     ButtonModule,
//     TableModule,
//     TabViewModule,

//     RelateAssetTabComponent,
//     RelateUserTabComponent,
//     RelateGeneralTabComponent,
//     NoteTabComponent,
//   ],
// })
// export class CreateContractComponent {
//   contractForm: FormGroup;
//   statusOptions = [
//     { label: 'Active', value: 'Active' },
//     { label: 'Down', value: 'Down' },
//   ];
//   companyOptions: any[] = []; // companies list

//   constructor(
//     private fb: FormBuilder,
//     private contractService: ContractService,
//     private router: Router
//   ) {
//     this.contractForm = this.fb.group({
//       company: ['', Validators.required],
//       service: [''],
//       status_reason: [''],
//       period: ['', Validators.required],
//       status: ['', Validators.required],
//     });
//   }

//   // temp
//   getCompanyAndSite(data: any) {
//     this.contractForm.get('companyName')?.setValue(data.company);
//     this.contractForm.get('AssetSite')?.setValue(data.site);
//   }
//   getNoteId(noteId: string) {
//     this.contractForm.get('notes_id')?.setValue(noteId);
//   }
//   getUserId(userId: string) {
//     this.contractForm.get('user_id')?.setValue(userId);
//   }
//   //
//   onSubmit(): void {
//     if (this.contractForm.valid) {
//       this.contractService
//         .createContract(this.contractForm.value)
//         .subscribe(() => {
//           this.router.navigate(['/contracts']);
//         });
//     }
//   }
// }

/////
/////
/////
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ContractService } from '../contract.service';
import { Router } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';

//
import { NoteTabComponent } from '../contract-tabs/note-tab/note-tab.component';
import { RelateAssetTabComponent } from '../contract-tabs/relate-asset-tab/relate-asset-tab.component';
import { RelateUserTabComponent } from '../contract-tabs/relate-user-tab/relate-user-tab.component';
import { RelateGeneralTabComponent } from '../contract-tabs/relate-general-tab/relate-general-tab.component';
interface Company {
  id: string;
  name: string;
  isDeleted: number;
  created_at: string;
  updated_at: string;
}
@Component({
  selector: 'app-create-contract',
  standalone: true,
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.css'],
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    ButtonModule,
    TableModule,
    TabViewModule,

    RelateAssetTabComponent,
    RelateUserTabComponent,
    RelateGeneralTabComponent,
    NoteTabComponent,
  ],
})
export class CreateContractComponent implements OnInit {
  contractForm: FormGroup;
  statusOptions = [
    { label: 'Active', value: 'Active' },
    { label: 'Down', value: 'Down' },
  ];
  periodOptions = [
    { label: '1 Year', value: '1 Year' },
    { label: '2 Years', value: '2 Years' },
    { label: '3 Years', value: '3 Years' },
  ];
  companyOptions: any[] = []; //  Companies List

  constructor(
    private fb: FormBuilder,
    private contractService: ContractService,
    private router: Router
  ) {
    this.contractForm = this.fb.group({
      company: ['', Validators.required],
      service: [''],
      status_reason: [''],
      period: ['', Validators.required],
      status: ['', Validators.required],
    });
  }

  // ngOnInit(): void {
  //   this.contractService.getCompanies().subscribe(
  //     (companies: Company[]) => {
  //       this.companyOptions = companies.map((company: Company) => ({
  //         label: company.name,
  //         value: company.id,
  //       }));
  //       console.log(this.companyOptions); // تحقق من البيانات المحملة
  //     },
  //     (error) => {
  //       console.error('Error fetching companies:', error);
  //     }
  //   );
  // }
  ngOnInit(): void {
    this.contractService.getCompanies().subscribe(
      (response: any) => {
        console.log('API Response:', response); // تحقق من أن البيانات تم جلبها بشكل صحيح
        if (response && response.companies) {
          // this.companyOptions = response.companies.map((company: any) => ({
          this.companyOptions = response.companies.map((company: Company) => ({
            label: company.name,
            value: company.id,
          }));
        } else {
          console.error('No companies found in the response');
        }
      },
      (error) => {
        console.error('Error fetching companies:', error);
      }
    );
  }

  getCompanyAndSite(data: any) {
    this.contractForm.get('companyName')?.setValue(data.company);
    this.contractForm.get('AssetSite')?.setValue(data.site);
  }

  getNoteId(noteId: string) {
    this.contractForm.get('notes_id')?.setValue(noteId);
  }

  getUserId(userId: string) {
    this.contractForm.get('user_id')?.setValue(userId);
  }

  // onSubmit(): void {
  //   if (this.contractForm.valid) {
  //     this.contractService
  //       .createContract(this.contractForm.value)
  //       .subscribe(() => {
  //         this.router.navigate(['/contracts']);
  //       });
  //   }
  // }
  onSubmit(): void {
    if (this.contractForm.valid) {
      console.log('Form Data:', this.contractForm.value); // التحقق من القيم قبل الإرسال
      this.contractService.createContract(this.contractForm.value).subscribe(
        () => {
          this.router.navigate(['/contracts']);
        },
        (error) => {
          console.error('Error creating contract:', error);
        }
      );
    }
  }
}
