import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { environment } from '../environments/environment';
import { DOCUMENT } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiSampleService } from './services/api-sample.service';

type Gtag = typeof gtag;
type WindowWithGtag = Window & { gtag: Gtag };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isDev: boolean;

  private windowWithGtag!: WindowWithGtag;

  constructor(
    private renderer: Renderer2,
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.isDev = !environment.production;
    this.windowWithGtag = window as WindowWithGtag;
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // console.log(event);
        this.windowWithGtag.gtag('config', environment.gaCode, {
          page_path: event.urlAfterRedirects,
          custom_map: {
            dimension1: 'custom_id'
          },
          custom_id: 'User1'
        });
      }
    });
    const s1 = this.renderer.createElement('script');
    s1.type = 'text/javascript';
    s1.src = `https://www.googletagmanager.com/gtag/js?id=${environment.gaCode}`;
    this.renderer.appendChild(this.document.head, s1);

    const s2 = this.renderer.createElement('script');
    s2.type = 'text/javascript';
    s2.text = `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments)};gtag('js', new Date());gtag('config', '${environment.gaCode}');`;
    this.renderer.appendChild(this.document.head, s2);
  }
}
