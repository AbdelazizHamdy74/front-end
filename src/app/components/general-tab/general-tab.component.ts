import { Component,OnInit } from '@angular/core';
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
  constructor(private fb: FormBuilder, private http: HttpClient) {
   
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      company: ['Aitb', Validators.required],
      site: ['Cairo', Validators.required],
      owner: ['Ahmed', Validators.required],
      ownercontact: ['01234567891', Validators.required],
      date:['1/1/2024', Validators.required]
    });
    
  }
 onSubmit() {
  if(this.form.valid){
    console.log("submit",this.form.value);
  }else{
    console.log("error")
  }
  }

}
