import { Component,Output,EventEmitter } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ContractsService } from '../../services/contract/contracts.service';
interface column {
  field: string;
  header: string;
}
@Component({
  selector: 'app-contract-tab',
  standalone: true,
  imports: [TableModule,CommonModule,DialogModule,ButtonModule],
  providers: [ContractsService],
  templateUrl: './contract-tab.component.html',
  styleUrl: './contract-tab.component.css'
})
export class ContractTabComponent {
  contracts!:any[];
  selectedContracts:any[]=[];
  visible: boolean = false;
  cols!: column[];
  @Output() contractSelected = new EventEmitter<any>();

  constructor(private contractService: ContractsService) { }
  showDialog() {
    this.visible = true;
}  
selectContract(contract: any) {
  this.selectedContracts[0]=contract;
  this.contractSelected.emit(this.selectedContracts[0].id);
  console.log("added contract")

}
  ngOnInit(): void {
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'created_at', header: 'Created at' },
      { field: 'period', header: 'Period' },
      { field: 'status', header: 'Status' }
  ];
    this.contractService.getAllContracts().subscribe({
      next: (res: any) => {
        this.contracts = res.data;  
      },error: (err) => {
        console.log(err);
      }
    })
  
  }

}
