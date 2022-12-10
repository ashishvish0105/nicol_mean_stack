import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListstudentnComponent } from './liststudentn/liststudentn.component';

const routes: Routes = [
  {
    path: '',
    component: ListstudentnComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
