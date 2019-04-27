import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';

export interface IReportRow {
  accountId: number;
  name: string;
  category: string;
  score1: number;
  score2: number;
  rate: number;
}

@Component({
  selector: 'app-grouping-grid',
  templateUrl: './grouping-grid.component.html',
  styleUrls: ['./grouping-grid.component.scss']
})
export class GroupingGridComponent implements OnInit {
  public gridOptions: GridOptions = {};
  public gridRows: any;

  constructor() {}

  ngOnInit() {
    this.gridRows = this.getDummyGridRows();
  }

  private getDummyGridRows() {
    const categories = ['hoge', 'fuga', 'piyo'];

    return Array.apply(null, { length: 100 })
      .map(Number.call, Number)
      .map(n => {
        const s1 = Math.floor(Math.random() * 1000);
        const s2 = Math.floor(Math.random() * 100);
        return <IReportRow>{
          accountId: n,
          name: `テストアカウント${n}`,
          category: categories[Math.floor(Math.random() * categories.length)],
          score1: s1,
          score2: s2,
          rate: Math.round((s2 / s1) * 100) / 100
        };
      });
  }
}
