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
  MomentRangeComponent
} from './pages';
// import {PivotGroupingGridComponent} from "./pages/pivot-grouping-grid/pivot-grouping-grid.component";
import { SlideComponent } from './pages/slide/slide.component';
import { CustomComponentComponent } from './pages/custom-component/custom-component.component';
import { ViewchildrenComponent } from './pages/viewchildren/viewchildren.component';
import { PinnedRowComponent } from './pages/pinned-row/pinned-row.component';
import { PollingJobComponent } from './pages/polling-job/polling-job.component';
import { ChartjsComponent } from './pages/chartjs/chartjs.component';
import { AgGridFlexBoxComponent } from './pages/ag-grid-flex-box/ag-grid-flex-box.component';
// import {GoogleOauthComponent} from "./pages/google-oauth/google-oauth.component";
import { StructualDirectiveComponent } from 'app/pages/structual-directive/structual-directive.component';
import { RouterActiveComponent } from './pages/router-active/router-active.component';
import { AgGridReactiveColumndefComponent } from './pages/ag-grid-reactive-columndef/ag-grid-reactive-columndef.component';
// import {MarbleDiagramComponent} from "./pages/marble-diagram/marble-diagram.component";
import { BindBetweenWindowComponent } from './pages/bind-between-window/bind-between-window.component';
import { ChildWindowComponent } from './pages/child-window/child-window.component';
import { ToPromiseComponent } from './pages/to-promise/to-promise.component';
import { ReactiveFormComponent } from './pages/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './pages/template-driven-form/template-driven-form.component';
import { NonScrollGridComponent } from './pages/non-scroll-grid/non-scroll-grid.component';
import { WipComponent } from './pages/wip/wip.component';

const appRoutes: Routes = [
  { path: 'queryparams', component: GetParamsComponent },
  { path: 'routerlink', component: RouterActiveComponent },
  { path: 'routerlink/hoge', component: RouterActiveComponent },
  { path: 'routerlink/fuga', component: RouterActiveComponent },
  { path: 'rxjs', component: RxjsComponent },
  { path: 'focus', component: FormatFocusoutComponent },
  { path: 'validation', component: ValidationComponent },
  { path: 'recursive', component: RecursiveTemplateComponent },
  { path: 'cache', component: ResponseCacheComponent },
  { path: 'polling', component: PollingJobComponent },
  { path: 'momentrange', component: MomentRangeComponent },
  { path: 'slide', component: SlideComponent },
  { path: 'custom', component: CustomComponentComponent },
  { path: 'grid/pinned', component: PinnedRowComponent },
  { path: 'grid/flex', component: AgGridFlexBoxComponent },
  // { path: 'grid/pivot', component: PivotGroupingGridComponent},
  { path: 'viewchildren', component: ViewchildrenComponent },
  { path: 'chartjs', component: ChartjsComponent },
  // { path: 'google', component: GoogleOauthComponent},
  { path: 'structual_directive', component: StructualDirectiveComponent },
  // { path: 'marble_diagram', component: MarbleDiagramComponent},
  { path: 'grid/reactive', component: AgGridReactiveColumndefComponent },
  { path: 'window', component: BindBetweenWindowComponent },
  { path: 'child-window', component: ChildWindowComponent },
  { path: 'to-promise', component: ToPromiseComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'template-driven-form', component: TemplateDrivenFormComponent },
  { path: 'grid/non-scroll-grid', component: NonScrollGridComponent },
  { path: 'wip', component: WipComponent },
  { path: '', component: TopComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
