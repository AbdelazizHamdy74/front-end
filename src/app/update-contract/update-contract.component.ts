// 3. Component: update-contract.component.ts
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContractService } from '../contract.service';
import { DropdownModule } from 'primeng/dropdown';
import { TabViewModule } from 'primeng/tabview';
import { DividerModule } from 'primeng/divider';

//
import { NoteTabComponent } from '../contract-tabs/note-tab/note-tab.component';
import { RelateAssetTabComponent } from '../contract-tabs/relate-asset-tab/relate-asset-tab.component';
import { RelateUserTabComponent } from '../contract-tabs/relate-user-tab/relate-user-tab.component';
import { RelateGeneralTabComponent } from '../contract-tabs/relate-general-tab/relate-general-tab.component';
import { not } from 'rxjs/internal/util/not';

@Component({
  selector: 'app-update-contract',
  standalone: true,
  templateUrl: './update-contract.component.html',
  styleUrls: ['./update-contract.component.css'],
  imports: [ReactiveFormsModule, DropdownModule, TabViewModule,
    DividerModule,
    RelateAssetTabComponent,
    // RelateUserTabComponent,
    RelateGeneralTabComponent,
    NoteTabComponent,],
})
export class UpdateContractComponent implements OnInit {
  periodOptions = [
    { label: '1 Year', value: '1 Year' },
    { label: '2 Years', value: '2 Years' },
    { label: '3 Years', value: '3 Years' },
  ];
  contractForm: FormGroup;

  contractId: string = '';
  constructor(
    private fb: FormBuilder,
    private contractService: ContractService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.contractForm = this.fb.group({
      status_reason: [''],
      period: ['', Validators.required],
      status: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.contractId = this.route.snapshot.params['id'];
    this.contractService.getContractById(this.contractId).subscribe((data) => {
      this.contractForm.patchValue(data);
    });
  }
  getCompanyAndSite(data: any) {
    // console.log(data);
    this.contractForm.get('start_date')?.setValue(data.startdate);
    this.contractForm.get('expiration_date')?.setValue(data.expdate);
    this.contractForm.get('notification_date')?.setValue(data.notfdate);
    this.contractForm.get('response_time')?.setValue(data.restime);
    this.contractForm.get('restoration_time')?.setValue(data.restorationtime);
    this.contractForm.get('resolution_time')?.setValue(data.resolutiontime);
    this.contractForm.get('support_window')?.setValue(data.supportwindow);
  }

  getNoteId(noteId: string) {
    this.contractForm.get('notes')?.setValue(noteId);
  }

  // getUserId(userId: string) {
  //   this.contractForm.get('user_id')?.setValue(userId);
  // }

  onSubmit(): void {
    if (this.contractForm.valid) {
      this.contractService
        .updateContract(this.contractId, this.contractForm.value)
        .subscribe(() => {
          this.router.navigate(['/contracts']);
        });
    }
  }
}
