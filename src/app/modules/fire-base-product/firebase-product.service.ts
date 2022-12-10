import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class FirebaseProductService {

  constructor(private http: HttpClient) {
  }

  getProductList() {
    return this.http.get<any>(`${environment.firebaseProduct}/allProduct.json`)
  }

  createProduct(data: {
    productId: string,
    productName: string,
    productimage: string,
    productDetail: string,
    productPrice: number,
    productCatagory: string,
    productRelated: string,
  }) {
    debugger
    return this.http.post<any>(`${environment.firebaseProduct}/allProduct.json`, data)
  }

  updateProduct(data: {
    productId: string,
    productName: string,
    productimage: string,
    productDetail: string,
    productPrice: number,
    productCatagory: string,
    productRelated: string,
  }) {
    return this.http.post<any>(`${environment.firebaseProduct}/allProduct.json`, data)
  }

  deleteProduct(id: any) {
    return this.http.delete<any>(`${environment.firebaseProduct}/allProduct/${id}.json`)
  }
}
