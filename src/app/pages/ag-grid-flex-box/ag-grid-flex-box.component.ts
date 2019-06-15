import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-ag-grid-flex-box',
  templateUrl: './ag-grid-flex-box.component.html',
  styleUrls: ['./ag-grid-flex-box.component.scss']
})
export class AgGridFlexBoxComponent implements OnInit {
  public isMenu1Collapsed: boolean;
  public isMenu2Collapsed: boolean;
  public gridOptions: GridOptions = {};
  public gridRows: any;
  constructor() {
    this.isMenu1Collapsed = false;
    this.isMenu2Collapsed = false;
  }

  ngOnInit() {
    this.gridRows = this.getDummyGridRows();
    this.gridOptions.defaultColDef = {
      sortable: true,
      filter: true
    };
  }

  collapsed(event: any): void {
    console.log(event);
  }

  expanded(event: any): void {
    console.log(event);
  }

  private getDummyGridRows() {
    const categories = ['hoge', 'fuga', 'piyo'];

    const dummyArray: number[] = new Array(100).fill(1);
    return dummyArray.map((n: number, i: number) => {
      const s1 = Math.floor(Math.random() * 1000);
      const s2 = Math.floor(Math.random() * 100);
      return {
        accountId: i,
        name: `テストアカウント${i}`,
        category: categories[Math.floor(Math.random() * categories.length)],
        score1: s1,
        score2: s2,
        rate: Math.round((s2 / s1) * 100) / 100
      };
      this.isMenu1Collapsed = false;
    });
  }
}
