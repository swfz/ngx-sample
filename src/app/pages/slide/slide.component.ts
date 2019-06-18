import { Component, AfterViewInit } from '@angular/core';

interface RevealInWindow {
  Reveal: any;
}
@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements AfterViewInit {
  reveal: any;
  constructor() {
    this.reveal = (window as Window & RevealInWindow).Reveal;
  }

  ngAfterViewInit() {
    // this.reveal.initialize({
    //   controls: true,
    // });
    // Reveal.initialize({
    //   controls: true,
    // });
    // this.reveal.initialize({
    //   controls: true,
    // });
    this.reveal.initialize({
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
            'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.8.0/js/reveal.min.js',
          condition: function() {
            return !document.body.classList;
          }
        },
        {
          src:
            'https://cdnjs.cloudflare.com/ajax/libs/marked/0.6.2/marked.min.js',
          condition: function() {
            return !!document.querySelector('[data-markdown]');
          }
        },
        {
          src:
            'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.8.0/plugin/markdown/markdown.min.js',
          condition: function() {
            return !!document.querySelector('[data-markdown]');
          }
        }
      ]
    });
  }
}
