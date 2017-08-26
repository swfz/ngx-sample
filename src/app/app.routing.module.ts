import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  GetParamsComponent,
  TopComponent,
  RxjsComponent,
  FormatFocusoutComponent,
} from "./pages";

const appRoutes: Routes = [
  { path: 'queryparams', component: GetParamsComponent },
  { path: 'rxjs', component: RxjsComponent },
  { path: 'focus', component: FormatFocusoutComponent },
  { path: '', component: TopComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full'},
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
