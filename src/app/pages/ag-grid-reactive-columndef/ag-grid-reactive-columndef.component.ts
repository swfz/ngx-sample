import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid';
import {AgGridCellEditorDatepickerComponent} from '../../components/ag-grid-cell-editor.datepicker/ag-grid-cell-editor.datepicker.component';

@Component({
  selector: 'app-ag-grid-reactive-columndef',
  templateUrl: './ag-grid-reactive-columndef.component.html',
  styleUrls: ['./ag-grid-reactive-columndef.component.scss'],
  entryComponents: [AgGridCellEditorDatepickerComponent]
})
export class AgGridReactiveColumndefComponent implements OnInit {
  public gridOptions: GridOptions;
  public rowData: any;
  public columnDefs: any;

  constructor() { }

  ngOnInit() {
    this.columnDefs = [
      {
        headerName: 'スペース',
        field: 'empty',
        cellRenderer: this.linkRenderer,
        width: 100
      },
      {
        headerName: '開始日',
        field: 'startDate',
        width: 120,
        editable: true,
        cellEditorFramework: AgGridCellEditorDatepickerComponent
      },
    ];

    this.rowData = [
      {
        startDate: '2018-08-01',
      },
      {
        startDate: '2018-08-02',
      }
    ];
  }

  private linkRenderer(params){
    return `<a href="/grid/flex">リンク</a>`
  }

  valueChanged(e){
    console.log(e);
  }

  editted(e) {
    console.log(e);
  }
}
