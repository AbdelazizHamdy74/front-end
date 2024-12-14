import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-relate-general-tab',

  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    CalendarModule,
    DropdownModule,
  ],
  templateUrl: './relate-general-tab.component.html',
  styleUrl: './relate-general-tab.component.css',
})
export class RelateGeneralTabComponent implements OnInit {
  statusOptions = [
    { label: 'Active', value: 'Active' },
    { label: 'Down', value: 'Down' },
  ];
  form!: FormGroup;
  @Output() generalEvent = new EventEmitter<any>();
  constructor(private fb: FormBuilder, private http: HttpClient) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      owner: [''],
      ownercontact: [''],
      date: [''],
    });
  }
  onSubmit() {
    if (this.form.valid) {
      console.log('submit', this.form.value);
      this.generalEvent.emit({});
    } else {
      console.log('error');
    }
  }
}
