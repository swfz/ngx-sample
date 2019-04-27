import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ColDef, GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-non-scroll-grid',
  templateUrl: './non-scroll-grid.component.html',
  styleUrls: ['./non-scroll-grid.component.scss']
})
export class NonScrollGridComponent implements OnInit {
  public gridOptions: GridOptions;
  public columnDefs: ColDef[];
  public gridRows: any;

  constructor() {}

  ngOnInit() {
    this.gridOptions = <GridOptions>{};
    this.gridRows = this.getDummyGridRows();
    this.gridOptions.defaultColDef = {
      sortable: true,
      filter: true
    };
  }

  onGridReady(params) {
    // TODO: 動かなくなったので後で修正
    // params.api.setDomLayout('print');
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
          rate: Math.round((s2 / s1) * 100) / 100
        };
      });
  }
}
