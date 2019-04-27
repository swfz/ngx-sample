import { Component, OnInit, AfterViewInit } from '@angular/core';
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
  selector: 'app-pinned-row',
  templateUrl: './pinned-row.component.html',
  styleUrls: ['./pinned-row.component.scss']
})
export class PinnedRowComponent implements OnInit, AfterViewInit {
  public gridOptions: GridOptions = {};
  public gridRows: IReportRow[];
  public pinnedTopRowData: any = [{}];

  constructor() {}

  ngOnInit() {
    this.gridRows = this.getDummyGridRows();
  }

  ngAfterViewInit() {
    this.gridOptions.api.setPinnedTopRowData(this.getDummyPinnedTopRowData());
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

  private getDummyPinnedTopRowData() {
    return [
      {
        accountId: 6,
        name: 'Total',
        category: 'Total',
        score: 5550,
        rate: 0.0983
      }
    ];
  }
}
