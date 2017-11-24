import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  GetParamsComponent,
  TopComponent,
  RxjsComponent,
  FormatFocusoutComponent,
  ValidationComponent,
  RecursiveTemplateComponent,
  ResponseCacheComponent,
  MomentRangeComponent,
} from "./pages";
import {SlideComponent} from "./pages/slide/slide.component";
import {CustomComponentComponent} from "./pages/custom-component/custom-component.component";
import {GroupingGridComponent} from "./pages/grouping-grid/grouping-grid.component";

const appRoutes: Routes = [
  { path: 'queryparams', component: GetParamsComponent },
  { path: 'rxjs', component: RxjsComponent },
  { path: 'focus', component: FormatFocusoutComponent },
  { path: 'validation', component: ValidationComponent },
  { path: 'recursive', component: RecursiveTemplateComponent},
  { path: 'cache', component: ResponseCacheComponent},
  { path: 'momentrange', component: MomentRangeComponent},
  { path: 'slide', component: SlideComponent},
  { path: 'custom', component: CustomComponentComponent},
  { path: 'grid/group', component: GroupingGridComponent},
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
