import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AddUserService {
  private url="http://localhost:4000/auth/register"

  constructor(private http:HttpClient) { }

  addUser(user:any){
    return this.http.post(this.url,user)
  }
}
