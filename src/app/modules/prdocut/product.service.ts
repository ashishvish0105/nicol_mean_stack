import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { environment } from '../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  clothSize = [
    { id: 1, size: 'XXS' },
    { id: 2, size: 'XS' },
    { id: 3, size: 'S' },
    { id: 4, size: 'M' },
    { id: 5, size: 'L' },
    { id: 6, size: 'XL' },
    { id: 7, size: 'XXL' },
  ];

  Category = [
    { id: 1, Category: 'Man' },
    { id: 2, Category: 'Homan' },
    { id: 3, Category: 'Children' },
    { id: 4, Category: 'oldener' },
  ];
  productsCategory = of(this.Category);

  constructor(private http: HttpClient) {

  }
  // data: {
  //   category: string,
  //   productName: string,
  //   price: number,
  //   clothSize: string,
  //   inStock: string,
  //   _id: number,
  //   description: string
  // }

  clothSizeDataPromise() {
    const dataCategory = this.clothSize
    return new Promise(function (resolve, reject) {
      if (dataCategory.length > 1) {
        resolve(dataCategory);
      }
      else {
        reject('clothSize not found');
      }
    })
  }

  categorydatapromise() {
    const dataCategory = this.Category
    return new Promise(function (resolve, reject) {
      if (dataCategory.length > 1) {
        resolve(dataCategory);
      }
      else {
        reject('category not found');
      }
    })
  }

  getAllProduct() {
    return this.http.get<any>(`${environment.studenApi}/product/get`);
  }
  getProduct(id: string) {
    debugger
    return this.http.get<any>(`${environment.studenApi}/product/get-product-by-id?id=${id}`);
  }
  addProduct(data: {
    category: string,
    productName: string,
    description: string,
    price: number,
    clothSize: string,
    inStock: string,
  }) {
    return this.http.post<any>(`${environment.studenApi}/product/add`, data);
  }
  editProduct(data: any) {
    return this.http.post<any>(`${environment.studenApi}/product/update`, data);
  }
  deleteProduct(id: string) {
    debugger
    return this.http.delete<any>(`${environment.studenApi}/product/delete?id=${id}`);
  }

}
