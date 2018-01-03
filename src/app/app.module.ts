import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular/main';

import {
  AlertModule,
  TabsModule,
  PopoverModule,
} from 'ngx-bootstrap';

import {
  TopComponent,
  GetParamsComponent,
  RxjsComponent,
  FormatFocusoutComponent,
  ValidationComponent,
  RecursiveTemplateComponent,
  ResponseCacheComponent,
} from './pages';

import { NumberInputPipe } from './pipes/number-input.pipe';
import { NumberInputDirective } from './directives/number-input.directive';
import { NameValidatorDirective } from './validators/name-validator.directive';
import { MultiFieldValidatorDirective } from './validators/multi-field-validator.directive';
import { CacheService } from './services/cache.service';
import { SlideComponent } from './pages/slide/slide.component';
import { MomentRangeComponent } from './pages/moment-range/moment-range.component';
import { TileSelectorComponent } from './components/tile-selector/tile-selector.component';
import { CustomSelectorComponent } from './components/custom-selector/custom-selector.component';
import { CustomComponentComponent } from './pages/custom-component/custom-component.component';
import {TableInputModule} from './components/table-input/table-input.module';
import { GroupingGridComponent } from './pages/grouping-grid/grouping-grid.component';
import { ViewchildrenComponent } from './pages/viewchildren/viewchildren.component';
import { PinnedRowComponent } from './pages/pinned-row/pinned-row.component';

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
    SlideComponent,
    MomentRangeComponent,
    NumberInputPipe,
    TileSelectorComponent,
    CustomSelectorComponent,
    CustomComponentComponent,
    GroupingGridComponent,
    ViewchildrenComponent,
    PinnedRowComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    TableInputModule,
    HttpClientModule,
    AlertModule.forRoot(),
    TabsModule.forRoot(),
    PopoverModule.forRoot(),
    AgGridModule.withComponents([]),
  ],
  providers: [
    NumberInputPipe,
    CacheService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
