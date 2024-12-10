import { Component,OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup ,ReactiveFormsModule,Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
@Component({
  selector: 'app-general-tab',
  standalone: true,
  imports: [ReactiveFormsModule,InputTextModule,CalendarModule],
  templateUrl: './general-tab.component.html',
  styleUrl: './general-tab.component.css'
})
export class GeneralTabComponent implements OnInit{
  form!: FormGroup ;
  @Output() generalEvent = new EventEmitter<any>();
  constructor(private fb: FormBuilder, private http: HttpClient) {
   
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      company: ['', Validators.required],
      site: ['', Validators.required],
      owner: [''],
      ownercontact: [''],
      date:['']
    });
    
  }
 onSubmit() {
  if(this.form.valid){
    console.log("submit",this.form.value);
    this.generalEvent.emit({
      company: this.form.value.company,
      site: this.form.value.site});
  }else{
    console.log("error")
  }
  }

}
