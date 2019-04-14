import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid';
// tslint:disable-next-line:max-line-length
import { AgGridCellEditorDatepickerComponent } from '../../components/ag-grid-cell-editor.datepicker/ag-grid-cell-editor.datepicker.component';
import _ from 'lodash';

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
      // 日付エディタを自作するサンプル
      {
        headerName: '開始日',
        field: 'startDate',
        width: 120,
        editable: true,
        cellEditorFramework: AgGridCellEditorDatepickerComponent
      },
      // CSVと画面で違う出力を表示させたいサンプル
      {
        headerName: 'check',
        field: 'check',
        width: 120,
        cellRenderer: this.checkRenderer
      },
      // contextを通してコールバックに任意のデータを渡したいサンプル
      {
        headerName: 'price',
        field: 'price',
        width: 100,
        cellClassRules: {
          'bg-danger': params => {
            const nodeId = params.node.id;
            const field = params.colDef.field;
            return params.value !== params.context.rowData[nodeId][field];
          }
        },
        editable: true
      }
    ];

    this.rowData = [
      {
        startDate: '2018-08-01',
        check: { hoge: true, fuga: false, piyo: true },
        price: 100
      },
      {
        startDate: '2018-08-02',
        check: { hoge: false, fuga: false, piyo: true },
        price: 200
      }
    ];

    // データがセットされた状態を保存
    this.gridOptions.context = { rowData: _.cloneDeep(this.rowData) };
  }

  private checkRenderer(params) {
    const value = params.value;
    return Object.keys(params.value)
      .map(key => {
        const iconClass = value[key] ? 'check-square-o' : 'square-o';
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
    const exportParams = {
      fileName: 'sample.csv',
      processCellCallback: params => {
        if (params.column.colDef.field === 'check') {
          return Object.keys(params.value)
            .map(key => `${key}: ${params.value[key]}`)
            .join(',');
        } else {
          return params.value;
        }
      }
    };
    this.gridOptions.api.exportDataAsCsv(exportParams);
  }
}
