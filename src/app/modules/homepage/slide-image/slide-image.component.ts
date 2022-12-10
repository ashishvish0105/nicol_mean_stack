import { keyframes } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ProductdataService } from '../productdata.service';

@Component({
  selector: 'app-slide-image',
  templateUrl: './slide-image.component.html',
  styleUrls: ['./slide-image.component.scss']
})
export class SlideImageComponent implements OnInit {
  allimage: any;
  slider = document.getElementById('slideIterm') as HTMLBRElement;

  constructor(private _productdataService: ProductdataService) { }

  ngOnInit(): void {
    this.getproduct()


    this.slider.addEventListener('mousedown', () => {
      console.log("mouser");
    });
    window.addEventListener('mousemove', function () {
      console.log("hellow")
    });
    window.addEventListener('mouseleave', function () {
      console.log("hellow")
    });
    window.addEventListener('mouseup', function () {
      console.log("hellow")
    });
    // window.addEventListener('transitionstart', () => toggleDisabled(true));
    // window.addEventListener('transitionend', () => toggleDisabled(false));
    // window.addEventListener('transitionend', withTransitionSuspended(fakeInfinity));
    // window.addEventListener('resize', withTransitionSuspended(shiftSlides));
    window.dispatchEvent(new Event('resize'));
  }

  getproduct() {
    this._productdataService.getdata().pipe(map((products) => {
      const modifydata = [];
      for (const product in products) {
        modifydata.push({
          'productId': product,
          ...products[product]
        }
        )
      }
      return modifydata;
    })).subscribe((res: any) => {
      this.allimage = res;
    })
  }


}
