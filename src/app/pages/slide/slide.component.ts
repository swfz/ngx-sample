import { Component, AfterViewInit } from '@angular/core';
import * as r from 'reveal.js';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements AfterViewInit {
  reveal: any;
  constructor() {
    this.reveal = r.Reveal;
  }

  ngAfterViewInit() {
    console.log(r);
    // this.reveal.initialize({
    //   controls: true,
    // });
    // Reveal.initialize({
    //   controls: true,
    // });
    // this.reveal.initialize({
    //   controls: true,
    // });
    r.initialize({
      width: 800,
      height: 600,
      controls: true,
      progress: true,
      overview: true,
      slideNumber: true,
      transition: true,
      help: true,
      dependencies: [
        {
          src:
            'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.5.0/lib/js/classList.min.js',
          condition: function() {
            return !document.body.classList;
          }
        },
        {
          src:
            'https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.6/marked.min.js',
          condition: function() {
            return !!document.querySelector('[data-markdown]');
          }
        },
        {
          src:
            'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.5.0/plugin/markdown/markdown.min.js',
          condition: function() {
            return !!document.querySelector('[data-markdown]');
          }
        }
      ]
    });
  }
}
