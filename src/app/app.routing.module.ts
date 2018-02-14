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
import {ViewchildrenComponent} from "./pages/viewchildren/viewchildren.component";
import {PinnedRowComponent} from "./pages/pinned-row/pinned-row.component";
import {PollingJobComponent} from "./pages/polling-job/polling-job.component";
import {ChartjsComponent} from "./pages/chartjs/chartjs.component";
import {AgGridFlexBoxComponent} from "./pages/ag-grid-flex-box/ag-grid-flex-box.component";

const appRoutes: Routes = [
  { path: 'queryparams', component: GetParamsComponent },
  { path: 'rxjs', component: RxjsComponent },
  { path: 'focus', component: FormatFocusoutComponent },
  { path: 'validation', component: ValidationComponent },
  { path: 'recursive', component: RecursiveTemplateComponent},
  { path: 'cache', component: ResponseCacheComponent},
  { path: 'polling', component: PollingJobComponent},
  { path: 'momentrange', component: MomentRangeComponent},
  { path: 'slide', component: SlideComponent},
  { path: 'custom', component: CustomComponentComponent},
  { path: 'grid/group', component: GroupingGridComponent},
  { path: 'grid/pinned', component: PinnedRowComponent},
  { path: 'grid/flex', component: AgGridFlexBoxComponent},
  { path: 'viewchildren', component: ViewchildrenComponent},
  { path: 'chartjs', component: ChartjsComponent},
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
