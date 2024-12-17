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

@Component({
  selector: 'app-update-contract',
  standalone: true,
  templateUrl: './update-contract.component.html',
  styleUrls: ['./update-contract.component.css'],
  imports: [ReactiveFormsModule, DropdownModule],
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
