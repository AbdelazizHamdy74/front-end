import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { AddUserService } from '../services/add-user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule,InputTextModule,DropdownModule,ButtonModule,PasswordModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
 form!: FormGroup

 role = ['Admin', 'Customer','Support'];
  constructor( private fb:FormBuilder,private http:HttpClient ,private addUserService: AddUserService, private route:Router) { }
  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required,Validators.minLength(3)]],
      company_id: ['', Validators.required],
      HrId: ['', Validators.required],
      role: ['',[ Validators.required ,Validators.pattern('Admin|Customer|Support')]],
      email: ['', [Validators.required, Validators.email]],
      phone:['', [Validators.required, Validators.minLength(11)]],
      password: ['', [Validators.required ,Validators.minLength(8)]],
      // confirmPassword: ['', Validators.required,Validators.minLength(8)],
    });
  }
  onSubmit() {
    if (this.form.valid) {
      this.addUserService.addUser(this.form.value).subscribe({
        next:(res)=>{
          console.log(res);
        },
        error:(err)=>{
          console.log(err);
        },
        complete:()=>{
          this.form.reset();
        }
      });
      // console.log('Form Submitted:', this.form.value);
    } else {
      console.log('Form is invalid');
    }
  }
  gotoLogin(){
    this.route.navigate(['/login']);
  }

}
