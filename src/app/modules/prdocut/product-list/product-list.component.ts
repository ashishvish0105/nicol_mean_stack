import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { ignoreElements } from 'rxjs';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  allProductlsit: any[] = [];
  searchingData: any;


  constructor(private _productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllProductList();

  }

  changevalue(data: string) {
    this.allProductlsit.filter((res) => {
      debugger
      return res?.productName.toLowerCase()?.indexOf(data.toLowerCase())
      // console.log(searchdata)
    })
  }


  getAllProductList() {
    this._productService.getAllProduct().subscribe((res) => {
      this.allProductlsit = res.data;
    })
  }
}


