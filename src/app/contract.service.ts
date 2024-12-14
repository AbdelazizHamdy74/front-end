// 1. Service: contract.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContractService {
  private apiUrl = 'http://localhost:4000/api/contracts';

  constructor(private http: HttpClient) {}

  getContracts(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  getContractById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createContract(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, data);
  }

  updateContract(id: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
}
