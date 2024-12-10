import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import{LoginService} from '../services/login.service'
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 constructor(http:HttpClient, private loginService: LoginService) {}
 logout(){
   this.loginService.logout().subscribe({
     next:(res:any)=>{console.log(res);
       this.loginService.setUser(null);
       window.location.reload();
     },
     error:(err)=>{console.log(err);},
     complete:()=>{console.log("logout completed");}
   });
   console.log("logout");
 }
}
