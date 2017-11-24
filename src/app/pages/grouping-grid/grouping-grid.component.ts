import { Component, OnInit } from '@angular/core';
import {GridOptions} from 'ag-grid';

@Component({
  selector: 'app-grouping-grid',
  templateUrl: './grouping-grid.component.html',
  styleUrls: ['./grouping-grid.component.scss']
})
export class GroupingGridComponent implements OnInit {

  public gridOptions: GridOptions = {};
  public gridRows: any;

  constructor() { }

  ngOnInit() {
    this.gridRows = this.getDummyData();
  }

  private getDummyData(){
    return [
      {accountId: 1, name: 'テストアカウント1', category: 'hoge', score: 5000},
      {accountId: 2, name: 'テストアカウント2', category: 'hoge', score: 2350},
      {accountId: 3, name: 'テストアカウント3', category: 'fuga', score: 400},
    ]
  }

}
