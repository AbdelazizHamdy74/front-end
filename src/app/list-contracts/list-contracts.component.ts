// 4. Component: list-contracts.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractService } from '../contract.service';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
@Component({
  selector: 'app-list-contracts',
  standalone: true,
  imports: [CommonModule, ButtonModule, TableModule],
  templateUrl: './list-contracts.component.html',
  styleUrls: ['./list-contracts.component.css'],
})
export class ListContractsComponent implements OnInit {
  contracts: any[] = [];

  constructor(
    private contractService: ContractService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.contractService.getContracts().subscribe((data) => {
      this.contracts = data.contracts;
    });
  }

  navigateToCreate(): void {
    this.router.navigate(['/contracts/create']);
  }

  navigateToUpdate(id: string): void {
    this.router.navigate([`/contracts/update/${id}`]);
  }
}
