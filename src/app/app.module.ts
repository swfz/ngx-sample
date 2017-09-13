import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app.routing.module";
import { FormsModule } from '@angular/forms';

import {
  AlertModule,
  TabsModule,
} from 'ngx-bootstrap';

import {
  TopComponent,
  GetParamsComponent,
  RxjsComponent,
  FormatFocusoutComponent
} from './pages';
import { NumberInputPipe } from './pipes/number-input.pipe';
import { NumberInputDirective } from './directives/number-input.directive';
import { ValidationComponent } from './pages/validation/validation.component';
import { NameValidatorDirective } from './validators/name-validator.directive';

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
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    AlertModule.forRoot(),
    TabsModule.forRoot()
  ],
  providers: [
    NumberInputPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
