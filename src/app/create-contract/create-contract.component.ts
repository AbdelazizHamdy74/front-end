import { Component } from '@angular/core';
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
export class CreateContractComponent {
  contractForm: FormGroup;
  statusOptions = [
    { label: 'Active', value: 'Active' },
    { label: 'Down', value: 'Down' },
  ];

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

  // temp
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
  //
  onSubmit(): void {
    if (this.contractForm.valid) {
      this.contractService
        .createContract(this.contractForm.value)
        .subscribe(() => {
          this.router.navigate(['/contracts']);
        });
    }
  }
}
