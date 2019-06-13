import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ColDef, GridOptions } from 'ag-grid-community';

interface GridRow {
  accountId: number;
  name: string;
  category: string;
  score1: number;
  score2: number;
  rate: number;
}

@Component({
  selector: 'app-non-scroll-grid',
  templateUrl: './non-scroll-grid.component.html',
  styleUrls: ['./non-scroll-grid.component.scss']
})
export class NonScrollGridComponent implements OnInit {
  public gridOptions: GridOptions;
  public gridRows: any;

  constructor() {
    this.gridOptions = {};
  }

  ngOnInit() {
    this.gridRows = this.getDummyGridRows();
    this.gridOptions.defaultColDef = {
      sortable: true,
      filter: true
    };
  }

  onGridReady() {
    // TODO: 動かなくなったので後で修正
    // params.api.setDomLayout('print');
  }

  private getDummyGridRows(): GridRow[]  {
    const categories = ['hoge', 'fuga', 'piyo'] as const;
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
      });
  }
}
