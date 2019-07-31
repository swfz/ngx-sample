import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isDev: boolean;
  public gaCode: string;

  constructor() {
    this.isDev = !environment.production;
    this.gaCode = environment.gaCode;
  }
}
