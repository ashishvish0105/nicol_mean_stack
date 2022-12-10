import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { FirebaseProductService } from '../firebase-product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList: any;
  productInfo: any;

  constructor(private _FirebaseProductService: FirebaseProductService) { }

  ngOnInit(): void {
    debugger
    this.getProductList()
  }

  getProductList() {
    this._FirebaseProductService.getProductList().pipe(map((element) => {
      let productlistModify = []
      for (const key in element) {
        productlistModify.push({
          'productId': key,
          ...element[key]
        })
      }
      return productlistModify;
    })).subscribe((res) => {
      this.productList = res;
      if (this.productList) {
        this.editMode(this.productList[0]);
      }
    })
  }

  editMode(detail: any) {
    debugger
    this.productInfo = detail;
  }

  deleteProduct(data: string) {
    debugger
    const Isdelete = confirm('would like to delete a product')
    if (Isdelete) {
      this._FirebaseProductService.deleteProduct(data).subscribe((res)=>{
        console.log(res + "deleted");
        this.getProductList();
      })
    }
  }

}
