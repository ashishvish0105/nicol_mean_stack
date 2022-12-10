import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { throwError } from 'rxjs';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  userid: any;
  product: any;
  toggelClass = false;
  editMode = false;
  productForm!: FormGroup;
  category: any;
  productSizeList: any;



  constructor(private _productService: ProductService, private activerouter: ActivatedRoute,
    private fb: FormBuilder, private route: Router

  ) { }

  ngOnInit(): void {
    this.activerouter.params.subscribe((res) => {
      this.userid = res;
      if (this.userid) {
        this.getproductdetails(this.userid?.id)
      }
    })

    this.activerouter.params.subscribe((res) => {
      debugger
      this.userid = res;
      if (this.userid) {
        this.getproductdetails(this.userid?.id)
      }
    })

    this.productForm = this.fb.group({
      id: new FormControl(this.userid?.id),
      productName: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      clothSize: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      inStock: new FormControl('', [Validators.required])
    });


    // this._productService.productsCategory.subscribe((res) => {
    //   this.category = res;
    //   debugger
    //   console.log(this.category)
    // })


    // promises throw call product category
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


  submitdata(data: {
    category: string,
    productName: string,
    description: string,
    price: number,
    clothSize: string,
    inStock: string,
    id: string,
  }) {
    this._productService.editProduct(data).subscribe((res) => {
      if (res) {
        window.location.reload();
      }
    })
  }

  getproductdetails(id: any) {

    this._productService.getProduct(id).subscribe((res) => {
      debugger
      this.product = res.data;
    })
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

}
