import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FireBaseRoutingModule } from './fire-base-routing.module';
import { ListdataComponent } from './listdata/listdata.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FirebaseComponent } from './firebase/firebase.component';


@NgModule({
  declarations: [
    ListdataComponent,
    FirebaseComponent
  ],
  imports: [
    CommonModule,
    FireBaseRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class FireBaseModule { }
