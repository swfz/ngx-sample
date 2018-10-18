import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-window',
  templateUrl: './child-window.component.html',
  styleUrls: ['./child-window.component.scss']
})
export class ChildWindowComponent implements OnInit {
  public hash: { [key: string]: string };

  constructor() {}

  ngOnInit() {
    console.log('opener');
    console.log(window.opener);
  }
}
