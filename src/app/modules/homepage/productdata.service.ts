import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductdataService {

  constructor(private http: HttpClient) { }

  getdata() {
    return this.http.get<any>(`${environment.firebaseProduct}/allProduct.json`);
  }
}
