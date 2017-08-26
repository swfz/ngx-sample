import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app.routing.module";

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

@NgModule({
  declarations: [
    AppComponent,
    GetParamsComponent,
    TopComponent,
    RxjsComponent,
    NumberInputDirective,
    FormatFocusoutComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AlertModule.forRoot(),
    TabsModule.forRoot()
  ],
  providers: [
    NumberInputPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
