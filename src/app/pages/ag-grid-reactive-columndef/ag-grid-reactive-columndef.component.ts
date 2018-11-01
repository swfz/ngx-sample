import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid';
import { AgGridCellEditorDatepickerComponent } from '../../components/ag-grid-cell-editor.datepicker/ag-grid-cell-editor.datepicker.component';

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

  constructor() {}

  ngOnInit() {
    this.gridOptions = <GridOptions>{};
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
      {
        headerName: 'check',
        field: 'check',
        width: 120,
        cellRenderer: this.checkRenderer
      }
    ];

    this.rowData = [
      {
        startDate: '2018-08-01',
        check: { hoge: true, fuga: false, piyo: true }
      },
      {
        startDate: '2018-08-02',
        check: { hoge: false, fuga: false, piyo: true }
      }
    ];
  }

  private checkRenderer(params) {
    const value = params.value;
    return Object.keys(params.value)
      .map(_ => {
        const iconClass = value[_] ? 'check-square-o' : 'square-o';
        return `<i class="fa fa-${iconClass}"></i>`;
      })
      .join('');
  }

  private linkRenderer(params) {
    return `<a [routerLink]="['grid','felx']">リンク</a>`;
  }

  valueChanged(e) {
    console.log(e);
  }

  editted(e) {
    console.log(e);
  }

  downloadCsv() {
    const params = {
      fileName: 'sample.csv',
      processCellCallback: params => {
        if (params.column.colDef.field === 'check') {
          return Object.keys(params.value)
            .map(_ => `${_}: ${params.value[_]}`)
            .join(',');
        } else {
          return params.value;
        }
      }
    };
    this.gridOptions.api.exportDataAsCsv(params);
  }
}
