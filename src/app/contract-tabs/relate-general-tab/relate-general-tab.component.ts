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
import { InputNumberModule } from 'primeng/inputnumber';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-relate-general-tab',

  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    CalendarModule,
    DropdownModule,
    InputNumberModule
  ],
  providers: [DatePipe],
  templateUrl: './relate-general-tab.component.html',
  styleUrl: './relate-general-tab.component.css',
})
export class RelateGeneralTabComponent implements OnInit {
  // statusOptions = [
  //   { label: 'Active', value: 'Active' },
  //   { label: 'Down', value: 'Down' },
  // ];
  supportwindowOptions = [{ label: '24/7', value: '24/7' },
    { label: 'weekends', value: 'Weekends' },
    { label: 'Business hours', value: 'Business Hours' },
  ];
  form!: FormGroup;
  @Output() generalEvent = new EventEmitter<any>();
  constructor(private fb: FormBuilder, private http: HttpClient,private datePipe: DatePipe) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      startdate: ['', Validators.required],
      expdate: [null],
      supportwindow: ['', Validators.required],
      notfdate: ['', Validators.required],
      restime: [null],
      restorationtime: [null],  
      resolutiontime: [null],
      
      
    });
  }
  onSubmit() {
    if (this.form.valid) {
      const data = {
        startdate: this.datePipe.transform(this.form.value.startdate, 'yyyy-MM-dd HH:mm:ss'),
        expdate: this.datePipe.transform(this.form.value.expdate, 'yyyy-MM-dd HH:mm:ss'),
        supportwindow: this.form.value.supportwindow,
        notfdate: this.datePipe.transform(this.form.value.notfdate, 'yyyy-MM-dd HH:mm:ss'),
        restime: this.form.value.restime,
        restorationtime: this.form.value.restorationtime,
        resolutiontime: this.form.value.resolutiontime
      }
      console.log('submit', this.form.value);
      this.generalEvent.emit(data);
    } else {
      console.log('error');
    }
  }
}
