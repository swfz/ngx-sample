import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { environment } from '../environments/environment';
import { DOCUMENT } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

declare const gtag: Function;

type WindowWithDataLayer = Window & { dataLayer: unknown[] };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isDev: boolean;
  public gaCode: string;

  private windowWithDataLayer!: WindowWithDataLayer;
  private navigationEndSubscription!: Subscription;

  constructor(
    private renderer: Renderer2,
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.isDev = !environment.production;
    this.gaCode = environment.gaCode;
    this.windowWithDataLayer = window as WindowWithDataLayer;
  }

  ngOnInit() {
    this.navigationEndSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log(event);
        gtag('config', environment.gaCode, { page_path: event.url });
      }
    });
    this.windowWithDataLayer.dataLayer = [];
    const s1 = this.renderer.createElement('script');
    s1.type = 'text/javascript';
    s1.src = 'https://www.googletagmanager.com/gtag/js?id=UA-73628530-3';
    this.renderer.appendChild(this.document.head, s1);

    const s2 = this.renderer.createElement('script');
    s2.type = 'text/javascript';
    s2.text = `function gtag(){dataLayer.push(arguments)};gtag('js', new Date());gtag('config', '${this.gaCode}');`;
    this.renderer.appendChild(this.document.head, s2);
  }
}
