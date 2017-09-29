import { Component, OnInit } from '@angular/core';
import * as r from 'reveal.js';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

  reveal: any;
  constructor(
  ) {
    this.reveal = r.Reveal;
  }

  ngOnInit() {
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
    });
  }

}
