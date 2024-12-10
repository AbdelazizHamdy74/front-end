import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url="http://localhost:4000/auth/login";
  logoutUrl="http://localhost:4000/auth/logout";
  private loggedInUser: any;
  constructor(private http:HttpClient) { }

  login(user:any){ 
    return this.http.post(this.url,user,{withCredentials: true });
  }
  setUser(user:any){
    this.loggedInUser=user;
  }
  getUser(){
    return this.loggedInUser;
  }
  getUserRole(){
    return this.loggedInUser? this.loggedInUser.role : null;
  }
  getUserId(){
    return this.loggedInUser? this.loggedInUser.id : null;
  }
  logout(){
   return this.http.post(this.logoutUrl,this.loggedInUser,{withCredentials: true })
  }
}
