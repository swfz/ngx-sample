import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular/main';
import { ChartModule } from 'primeng/chart';

import {
  AlertModule,
  TabsModule,
  PopoverModule,
  CollapseModule,
  BsDatepickerModule
} from 'ngx-bootstrap';

import { httpInterceptorProviders } from './http-interceptors';

import {
  TopComponent,
  GetParamsComponent,
  RxjsComponent,
  FormatFocusoutComponent,
  ValidationComponent,
  RecursiveTemplateComponent,
  ResponseCacheComponent
} from './pages';

// import { PivotGroupingGridComponent } from './pages/pivot-grouping-grid/pivot-grouping-grid.component';
import { NumberInputPipe } from './pipes/number-input.pipe';
import { NumberInputDirective } from './directives/number-input.directive';
import { NameValidatorDirective } from './validators/name-validator.directive';
import { MultiFieldValidatorDirective } from './validators/multi-field-validator.directive';
import { SlideComponent } from './pages/slide/slide.component';
import { MomentRangeComponent } from './pages/moment-range/moment-range.component';
import { TileSelectorComponent } from './components/tile-selector/tile-selector.component';
import { CustomSelectorComponent } from './components/custom-selector/custom-selector.component';
import { CustomComponentComponent } from './pages/custom-component/custom-component.component';
import { TableInputModule } from './components/table-input/table-input.module';
import { ViewchildrenComponent } from './pages/viewchildren/viewchildren.component';
import { PinnedRowComponent } from './pages/pinned-row/pinned-row.component';
import { PollingJobComponent } from './pages/polling-job/polling-job.component';
import { ChartjsComponent } from './pages/chartjs/chartjs.component';
import { AgGridFlexBoxComponent } from './pages/ag-grid-flex-box/ag-grid-flex-box.component';
import { GoogleOauthComponent } from './pages/google-oauth/google-oauth.component';
import { StructualDirectiveComponent } from './pages/structual-directive/structual-directive.component';
import { HashKeysDirective } from './directives/hash-keys.directive';
import { RouterActiveComponent } from './pages/router-active/router-active.component';
import { RouterPathActiveDirective } from './directives/router-path-active.directive';
import { AgGridCellEditorDatepickerComponent } from './components/ag-grid-cell-editor.datepicker/ag-grid-cell-editor.datepicker.component';
import { AgGridReactiveColumndefComponent } from './pages/ag-grid-reactive-columndef/ag-grid-reactive-columndef.component';
import { MarbleDiagramComponent } from './pages/marble-diagram/marble-diagram.component';
import { BindBetweenWindowComponent } from './pages/bind-between-window/bind-between-window.component';
import { ChildWindowComponent } from './pages/child-window/child-window.component';
import { ToPromiseComponent } from './pages/to-promise/to-promise.component';
import { ReactiveFormComponent } from './pages/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './pages/template-driven-form/template-driven-form.component';
import { NonScrollGridComponent } from './pages/non-scroll-grid/non-scroll-grid.component';
import { WipComponent } from './pages/wip/wip.component';
import { MessageService } from 'primeng/api';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    GetParamsComponent,
    TopComponent,
    RxjsComponent,
    NumberInputDirective,
    FormatFocusoutComponent,
    ValidationComponent,
    NameValidatorDirective,
    MultiFieldValidatorDirective,
    RecursiveTemplateComponent,
    ResponseCacheComponent,
    // PivotGroupingGridComponent,
    SlideComponent,
    MomentRangeComponent,
    NumberInputPipe,
    TileSelectorComponent,
    CustomSelectorComponent,
    CustomComponentComponent,
    ViewchildrenComponent,
    PinnedRowComponent,
    PollingJobComponent,
    ChartjsComponent,
    AgGridFlexBoxComponent,
    GoogleOauthComponent,
    StructualDirectiveComponent,
    HashKeysDirective,
    RouterActiveComponent,
    RouterPathActiveDirective,
    MarbleDiagramComponent,
    AgGridCellEditorDatepickerComponent,
    AgGridReactiveColumndefComponent,
    BindBetweenWindowComponent,
    ChildWindowComponent,
    ReactiveFormComponent,
    TemplateDrivenFormComponent,
    NonScrollGridComponent,
    ToPromiseComponent,
    WipComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    TableInputModule,
    HttpClientModule,
    MessageModule,
    MessagesModule,
    AlertModule.forRoot(),
    TabsModule.forRoot(),
    PopoverModule.forRoot(),
    CollapseModule.forRoot(),
    BsDatepickerModule.forRoot(),
    AgGridModule.withComponents([]),
    ChartModule
  ],
  providers: [NumberInputPipe, MessageService, httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}
