import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { DemodraganddropComponent } from './demodraganddrop/demodraganddrop.component';
import { KiViDetailsComponent } from './ki-vi-details/ki-vi-details.component';
import { DocviewerComponent } from './docviewer/docviewer.component';
// import { NewapiComponent } from './newapi/newapi.component';

const routes: Routes = [
  {
    path:'',
    component:ParentComponent
  },
  {
    path:'demo',
    component:DemodraganddropComponent
  },
  {
    path:'kividetails',
    component:KiViDetailsComponent
  },
  {
    path:'docviewer',
    component:DocviewerComponent
  },
  // {
  //   path:'newapi',
  //   component:NewapiComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
