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
} from './pages';

@NgModule({
  declarations: [
    AppComponent,
    GetParamsComponent,
    TopComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AlertModule.forRoot(),
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
