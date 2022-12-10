import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerHomeComponent } from './banner-home/banner-home.component';
import { SlideImageComponent } from './slide-image/slide-image.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: BannerHomeComponent
      },
      {
        path: 'slide page',
        component: SlideImageComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
