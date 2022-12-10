import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirebaseComponent } from './firebase/firebase.component';
import { ListdataComponent } from './listdata/listdata.component';

const routes: Routes = [
  {
    path: '',

    children: [
      {
        path: '',
        component: ListdataComponent,

      },
      {
        path: 'create',
        component: FirebaseComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FireBaseRoutingModule { }
