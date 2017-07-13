import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {GetParamsComponent} from "./pages/get-params/get-params.component";

const appRoutes: Routes = [
  { path: 'queryparams', component: GetParamsComponent },
  { path: '', redirectTo: '/', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
