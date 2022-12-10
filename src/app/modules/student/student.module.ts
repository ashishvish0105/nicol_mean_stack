import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { ListstudentnComponent } from './liststudentn/liststudentn.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ListstudentnComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    HttpClientModule
  ]
})
export class StudentModule { }
