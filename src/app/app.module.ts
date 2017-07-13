import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app.routing.module";

import {
  AlertModule,
  TabsModule,
} from 'ngx-bootstrap';
import { GetParamsComponent } from './pages/get-params/get-params.component';

@NgModule({
  declarations: [
    AppComponent,
    GetParamsComponent,
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
