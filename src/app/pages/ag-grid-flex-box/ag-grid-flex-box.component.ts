import { Component, OnInit } from '@angular/core';
import {GridOptions} from 'ag-grid';

@Component({
  selector: 'app-ag-grid-flex-box',
  templateUrl: './ag-grid-flex-box.component.html',
  styleUrls: ['./ag-grid-flex-box.component.scss']
})
export class AgGridFlexBoxComponent implements OnInit {

  public isMenu1Collapsed: boolean = false;
  public isMenu2Collapsed: boolean = false;
  public gridOptions: GridOptions = {};
  public gridRows: any;
  constructor() { }

  ngOnInit() {
    this.gridRows = this.getDummyGridRows();
  }

  collapsed(event: any): void {
    console.log(event);
  }

  expanded(event: any): void {
    console.log(event);
  }

  private getDummyGridRows() {
    const categories = ['hoge', 'fuga', 'piyo'];

    return Array.apply(null, { length: 100 })
      .map(Number.call, Number)
      .map(n => {
        const s1 = Math.floor(Math.random() * 1000);
        const s2 = Math.floor(Math.random() * 100);
        return {
          accountId: n,
          name: `テストアカウント${n}`,
          category: categories[Math.floor(Math.random() * categories.length)],
          score1: s1,
          score2: s2,
          rate: Math.round(s2 / s1 * 100) / 100
        };
      });
  }
}
