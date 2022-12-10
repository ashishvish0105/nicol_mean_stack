import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { map, pipe } from 'rxjs';
import { FirebaseProductService } from '../../fire-base-product/firebase-product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productForm!: FormGroup;
  listdata: any[] = [];
  productDetaildata: any;
  editModu = false;
  productId: any;

  private imageSrc: string = '';
  imageshow = this.imageSrc;
  constructor(private fb: FormBuilder, private _FirebaseProductService: FirebaseProductService, private activatedroute: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    console.log('edit mode product')
    debugger
    this.productForm = this.fb.group({
      productId: new FormControl(this.productId),
      productName: new FormControl(),
      productDetail: new FormControl(),
      productPrice: new FormControl(),
      productCatagory: new FormControl(),
      productRelated: new FormControl(),
    })

    if (this.activatedroute.snapshot.params['id']) {
      this.productId = this.activatedroute.snapshot.params['id'];
      this.editModu = true;
    }

    this._FirebaseProductService.getProductList().pipe(map((productRes) => {
      const ResponseModify = [];
      for (const key in productRes) {
        ResponseModify.push({
          'productId': key,
          ...productRes[key]
        })
      }
      return ResponseModify;
    })).subscribe((res) => {
      // console.log(res);
      for (const key in res) {
        const getid = res[key].productId
        if (this.productId === getid) {
          debugger
          this.productDetaildata = res[key];
          this.setvalueForedit(this.productDetaildata)
          // console.log(this.productDetaildata)
        }
      }
    })


  }

  // submit(data: any) {
  //   console.log(data)
  // }

  handleInputChange(e: any) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  _handleReaderLoaded(e: any) {
    let reader = e.target;
    this.imageSrc = reader.result;
    console.log(this.imageSrc)
    this.imageshow = reader.result;
  }

  submit() {
    const data = {
      productId: this.productId,
      productName: this.productForm.value.productName,
      productimage: this.imageshow,
      productDetail: this.productForm.value.productDetail,
      productPrice: this.productForm.value.productPrice,
      productCatagory: this.productForm.value.productCatagory,
      productRelated: this.productForm.value.productRelated
    }

    if (!this.editModu) {
      this._FirebaseProductService.createProduct(data).subscribe((res) => {
        if (res) {
          console.log('product create');
          this.router.navigateByUrl('/dashboard/fireBase Products')
        }
      })
    }
    else {
      this._FirebaseProductService.updateProduct(data).subscribe((res) => {
        if (res) {
          debugger
          console.log('product update');
          this.router.navigateByUrl('/dashboard/fireBase Products')
        }
      })
    }
  }

  setvalueForedit(data: {
    productName: string
    productimage: string,
    productDetail: string,
    productPrice: number,
    productCatagory: string,
    productRelated: string

  }) {
    if (data) {
      this.productForm.patchValue({
        productName: data.productName,
        productimage: data.productimage,
        productDetail: data.productDetail,
        productPrice: data.productPrice,
        productCatagory: data.productCatagory,
        productRelated: data.productRelated,
      });
    }
    if (data) {
      this.imageshow = data.productimage
    }
  }

}
