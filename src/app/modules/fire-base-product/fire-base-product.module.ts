import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FireBaseProductRoutingModule } from './fire-base-product-routing.module';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    FireBaseProductRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class FireBaseProductModule { }
