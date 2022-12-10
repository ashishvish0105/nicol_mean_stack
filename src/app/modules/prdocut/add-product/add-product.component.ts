import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  category: any;
  productSizeList: any;
  productForm!: FormGroup;
  toggelClass = false;
  editMode = false;
  constructor(private _productService: ProductService) { }

  ngOnInit(): void {

    this._productService.categorydatapromise().then(
      (value) => {
        if (value) {
          this.category = value;
        }
      },
      (error) => {
        if (error) {
          this.category = error;
        }
      }
    );

    this._productService.clothSizeDataPromise().then(
      ((value) => {
        this.productSizeList = value;
      }),
      ((error) => {
        this.productSizeList = error;
      }),
    )
  }

  toggleClick() {
    this.toggelClass = !this.toggelClass;
  }

  editProduct() {
    this.editMode = !this.editMode;
    if (this.toggelClass == true) {
      this.toggelClass = false;
    }
  }
  submitdata(dataL: any) {
    console.log(dataL)
  }
}
