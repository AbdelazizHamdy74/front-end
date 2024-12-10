import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AssetService {
  private apiUrl = 'http://localhost:4000/api/assets';

  constructor(private http: HttpClient) {}

  getAssets(filters: any): Observable<any> {
    let params = new HttpParams();
    for (const key in filters) {
      if (filters[key]) {
        params = params.set(key, filters[key]);
      }
    }
    return this.http.get<any[]>(this.apiUrl, { params ,withCredentials: true});
  }

  getAssetById(assetId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${assetId}`,{withCredentials: true});
  }

  // updateAsset(assetId: string, asset: any): Observable<any> {
  //   return this.http.put<any>(`${this.apiUrl}/${assetId}`, asset);
  // }
  updateAsset(assetId: string, assetData: FormData): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${assetId}`, assetData,{withCredentials: true});
  }

  createAsset(assetData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, assetData,{withCredentials: true});
  }
}
