import { Component, Output, EventEmitter } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { UsersService } from '../../services/users.service';

interface column {
  field: string;
  header: string;
}
@Component({
  selector: 'app-relate-user-tab',
  standalone: true,
  imports: [TableModule, CommonModule, DialogModule, ButtonModule],
  providers: [UsersService],
  templateUrl: './relate-user-tab.component.html',
  styleUrl: './relate-user-tab.component.css',
})
export class RelateUserTabComponent {
  users!: any[];
  selectedUsers: any[] = [];
  cols!: column[];
  visible: boolean = false;
  @Output() userSelected = new EventEmitter<any>();
  constructor(private userService: UsersService) {}

  showDialog() {
    this.visible = true;
  }
  selectUser(user: any) {
    this.selectedUsers[0] = user;
    this.userSelected.emit(this.selectedUsers[0].id);
    console.log('added user');
  }
  ngOnInit(): void {
    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'expirationDate', header: 'Expiration Date' },
      { field: 'startDate', header: 'Start Date' },
    ];
    this.userService.getUsers().subscribe({
      next: (res: any) => {
        this.users = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
