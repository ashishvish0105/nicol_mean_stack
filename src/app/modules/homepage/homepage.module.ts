import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { BannerHomeComponent } from './banner-home/banner-home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SlideImageComponent } from './slide-image/slide-image.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    BannerHomeComponent,
    SlideImageComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    SharedModule,
    HttpClientModule
  ]
})
export class HomepageModule { }
