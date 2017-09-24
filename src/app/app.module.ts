import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app.routing.module";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {
  AlertModule,
  TabsModule,
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
import {CacheService} from "./services/cache.service";

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
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    TabsModule.forRoot()
  ],
  providers: [
    NumberInputPipe,
    CacheService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
