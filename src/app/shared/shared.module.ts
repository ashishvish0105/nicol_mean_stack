import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubTitleHeadingBoxComponent } from './sub-title-heading-box/sub-title-heading-box.component';
import { ButtonComponent } from './button/button.component';
import { ImagewithtextComponent } from './imagewithtext/imagewithtext.component';


@NgModule({
  declarations: [
    SubTitleHeadingBoxComponent,
    ButtonComponent,
    ImagewithtextComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SubTitleHeadingBoxComponent,
    ButtonComponent,
    ImagewithtextComponent
  ]
})
export class SharedModule { }
