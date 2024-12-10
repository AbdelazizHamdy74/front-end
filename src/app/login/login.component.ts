import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import{LoginService} from '../services/login.service'
import {  Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [DropdownModule,InputTextModule,PasswordModule,ButtonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 form!: FormGroup
//  role = ['Admin', 'Customer','Support'];
 constructor( private fb:FormBuilder,private http:HttpClient ,private router:Router ,private loginService: LoginService) { }
 ngOnInit(): void {
   this.form = this.fb.group({
     email: ['', [Validators.required, Validators.email]],
     password: ['', [Validators.required ,Validators.minLength(8)]],
    //  role: ['',[ Validators.required ,Validators.pattern('Admin|Customer|Support')]],
   });
 }
 onSubmit()
 {
  if (this.form.valid) {
      this.loginService.login(this.form.value).subscribe({
       next:(res:any)=>{console.log(res);
        this.loginService.setUser(res.user);
        if(res.user.role=="Admin"){
          this.router.navigate(['/createAsset']);
        }else if(res.user.role=="Support"){
          this.router.navigate(['/assetConsole']);
        }
       },
        error:(err)=>{console.log(err);},
        complete:()=>{this.form.reset();}
        })
     console.log("Form Submitted:");   
 }else{
  console.log('Form is invalid');
   }
}
gotoSignUp(){
  this.router.navigate(['/signUp']);
}

}
