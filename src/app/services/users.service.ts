import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  url="http://localhost:4000/users/"
  getUsers(){
    return this.http.get(this.url)
  }
}
