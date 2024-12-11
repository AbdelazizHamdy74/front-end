import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ContractsService {
 url="http://localhost:4000/api/contracts/"
  constructor( private http:HttpClient) { }
  getAllContracts(){
    return this.http.get(this.url,{withCredentials: true });
  }
}
