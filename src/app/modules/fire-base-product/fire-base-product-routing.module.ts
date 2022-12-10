import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from '../fire-base-product/product/product.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ProductListComponent,
      },
      {
        path: 'productCrete',
        component: ProductComponent
      },
      {
        path: 'productCrete/:id',
        component: ProductComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FireBaseProductRoutingModule { }
