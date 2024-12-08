import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

interface column {
  field: string;
  header: string;
}
@Component({
  selector: 'app-user-tab',
  standalone: true,
  imports: [TableModule,CommonModule],
  templateUrl: './user-tab.component.html',
  styleUrl: './user-tab.component.css'
})
export class UserTabComponent {
  users!:any[];
  cols!: column[];
  ngOnInit(): void {
    this.cols = [
      { field: 'userID', header: 'User Login ID' },
      { field: 'role', header: 'Role' },
      { field: 'startDate', header: 'Start Date' },
      { field: 'contact', header: 'Contact' }
  ];
    this.users=[{userID: "1124568", role: "Admin", startDate: "1/1/2023", contact: "1234567890"},
      {userID: "1136589", role: "Admin", startDate: "1/1/2023", contact: "1234567890"}]
  }
}
