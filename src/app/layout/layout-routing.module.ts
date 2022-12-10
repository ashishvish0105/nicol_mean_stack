import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainsectionComponent } from './mainsection/mainsection.component';

const routes: Routes = [
  {
    path: "",
    component: MainsectionComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('../modules/homepage/homepage.module').then(m => m.HomepageModule)
      },
      {
        path: 'contact us',
        loadChildren: () => import('../modules/contect-us/contect-us.module').then(m => m.ContectUsModule)
      },
      {
        path: 'products',
        loadChildren: () => import('../modules/prdocut/prdocut.module').then(m => m.PrdocutModule)
      },
      {
        path: 'student',
        loadChildren: () => import('../modules/student/student.module').then(m => m.StudentModule)
      },
      {
        path: 'firebase',
        loadChildren: () => import('../modules/fire-base/fire-base.module').then(m => m.FireBaseModule)
      },
      {
        path: 'fireBase Products',
        loadChildren: () => import('../modules/fire-base-product/fire-base-product.module').then(m => m.FireBaseProductModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
