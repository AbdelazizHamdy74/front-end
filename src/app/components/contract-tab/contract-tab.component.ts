import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

interface column {
  field: string;
  header: string;
}
@Component({
  selector: 'app-contract-tab',
  standalone: true,
  imports: [TableModule,CommonModule],
  templateUrl: './contract-tab.component.html',
  styleUrl: './contract-tab.component.css'
})
export class ContractTabComponent {
  contracts!:any[];
  cols!: column[];
  ngOnInit(): void {
    this.cols = [
      { field: 'contract', header: 'Contract' },
      { field: 'startDate', header: 'Start Date' },
      { field: 'endDate', header: 'End Date' },
      { field: 'status', header: 'Status' }
  ];
    this.contracts=[{contract: "1124568", startDate: "1/1/2023", endDate: "1/1/2024", status: "Executed"}
    ,{contract: "1136589", startDate: "1/1/2023", endDate: "1/1/2024", status: "Executed"}]
  }

}
