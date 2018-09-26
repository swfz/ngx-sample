import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structual-directive',
  templateUrl: './structual-directive.component.html',
  styleUrls: ['./structual-directive.component.scss']
})
export class StructualDirectiveComponent implements OnInit {
  public hash: any;
  constructor() {}

  ngOnInit() {
    this.hash = {
      hoge: 'foo',
      fuga: 'bar',
      piyo: 'baz'
    };
  }

  public changeHash() {
    this.hash = Object.keys(this.hash).reduce((acc, cur) => {
      acc[cur] = `${this.hash[cur]}_`;
      return acc;
    }, {});
  }
}
