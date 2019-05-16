import { Component, OnInit } from '@angular/core';
import {
  CellValueChangedEvent,
  ColDef,
  CsvExportParams,
  GridOptions,
  ICellRendererParams,
  ProcessCellForExportParams
} from 'ag-grid-community';
// tslint:disable-next-line:max-line-length
import { AgGridCellEditorDatepickerComponent } from '../../components/ag-grid-cell-editor.datepicker/ag-grid-cell-editor.datepicker.component';
import _ from 'lodash';

interface CheckedData {
  hoge: boolean;
  fuga: boolean;
  piyo: boolean;
}
interface Row {
  startDate: string;
  check: CheckedData;
  price: number;
}
@Component({
  selector: 'app-ag-grid-reactive-columndef',
  templateUrl: './ag-grid-reactive-columndef.component.html',
  styleUrls: ['./ag-grid-reactive-columndef.component.scss'],
  entryComponents: [AgGridCellEditorDatepickerComponent]
})
export class AgGridReactiveColumndefComponent implements OnInit {
  public gridOptions: GridOptions;
  public rowData: Row[];
  public columnDefs: ColDef[];

  constructor() {}

  ngOnInit() {
    this.gridOptions = <GridOptions>{};
    this.gridOptions.defaultColDef = {
      sortable: true,
      filter: true,
      resizable: true
    };
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
            return (
              parseInt(params.value, 10) !==
              params.context.rowData[nodeId][field]
            );
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
      },
      {
        startDate: '2019-04-02',
        check: { hoge: false, fuga: false, piyo: true },
        price: 300
      },
      {
        startDate: '2019-02-15',
        check: { hoge: true, fuga: false, piyo: true },
        price: 500
      }
    ];

    // データがセットされた状態を保存
    this.gridOptions.context = { rowData: _.cloneDeep(this.rowData) };
  }

  private checkRenderer(params: ICellRendererParams): HTMLElement | string {
    const value = params.value;
    return Object.keys(params.value)
      .map(key => {
        const iconClass = value[key] ? 'check-square-o' : 'square-o';
        return `<i class="fa fa-${iconClass}"></i>`;
      })
      .join('');
  }

  private linkRenderer(params: ICellRendererParams): HTMLElement | string {
    return `<a [routerLink]="['grid','felx']">リンク</a>`;
  }

  valueChanged(e: CellValueChangedEvent): void {
    console.log(e);
  }

  editted(e: CellValueChangedEvent): void {
    console.log(e);
  }

  downloadCsv(): void {
    const valueIsCheck = (v: unknown): v is CheckedData => {
      if (typeof v !== 'object') {
        return false;
      }
      return ['hoge', 'fuga', 'piyo'].every(k => v.hasOwnProperty(k));
    };
    const exportParams: CsvExportParams = {
      fileName: 'sample.csv',
      processCellCallback: (params: ProcessCellForExportParams) => {
        const isCheckedData = valueIsCheck(params.value);
        if (isCheckedData) {
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
