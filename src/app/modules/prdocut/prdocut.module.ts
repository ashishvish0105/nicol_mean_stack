import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrdocutRoutingModule } from './prdocut-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './add-product/add-product.component';
import { SearchingPipe } from 'src/app/core/pipe/searching.pipe';
import { DrearchingdataPipe } from './drearchingdata.pipe';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent,
    AddProductComponent,
    SearchingPipe,
    DrearchingdataPipe
  ],
  imports: [
    CommonModule,
    PrdocutRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PrdocutModule { }
