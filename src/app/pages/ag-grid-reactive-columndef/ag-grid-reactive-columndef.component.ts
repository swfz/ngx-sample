import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {
  CellClassParams,
  CellValueChangedEvent,
  ColDef,
  CsvExportParams,
  FilterChangedEvent,
  GridOptions,
  ICellRendererParams,
  ProcessCellForExportParams,
  SortChangedEvent,
  ValueGetterParams
} from 'ag-grid-community';
// tslint:disable-next-line:max-line-length
import { AgGridCellEditorDatepickerComponent } from '../../components/ag-grid-cell-editor.datepicker/ag-grid-cell-editor.datepicker.component';
import * as _ from 'lodash';
import { AgGridAngular } from 'ag-grid-angular';

interface CheckedData {
  hoge: boolean;
  fuga: boolean;
  piyo: boolean;
}
interface Row {
  startDate: string;
  check: CheckedData;
  price: number;
  rawData: { [key: string]: number };
}
@Component({
  selector: 'app-ag-grid-reactive-columndef',
  templateUrl: './ag-grid-reactive-columndef.component.html',
  styleUrls: ['./ag-grid-reactive-columndef.component.scss'],
  entryComponents: [AgGridCellEditorDatepickerComponent]
})
export class AgGridReactiveColumndefComponent implements OnInit, AfterViewInit {
  public gridOptions!: GridOptions;
  public rowData!: Row[];
  public columnDefs!: ColDef[];
  @ViewChild(AgGridAngular, { static: true, read: ElementRef })
  private gridElement!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    console.log(
      this.gridElement.nativeElement.querySelectorAll('div.ag-header-cell')
    );
  }

  ngOnInit() {
    this.rowData = [];
    this.columnDefs = [];
    this.gridOptions = {};
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
        cellClassRules: {
          'bg-danger': (params: ICellRendererParams): boolean => {
            const data = params.context.rowData;
            const nodeId = params.node.id;
            const field = params.colDef.field;
            if (!field) {
              return false;
            }
            if (!data) {
              return false;
            }
            return params.value !== data[nodeId][field];
          }
        },
        editable: true,
        filter: 'agDateColumnFilter',
        cellEditorFramework: AgGridCellEditorDatepickerComponent
      },
      // CSVと画面で違う出力を表示させたいサンプル
      {
        headerName: 'check',
        field: 'check',
        width: 120,
        filter: 'agTextColumnFilter',
        // オブジェクトはfilterにわたすときに強制的にstringにされてしまうためJSONでシリアライズ,デシリアライズする
        filterValueGetter: (params: ValueGetterParams) => {
          return JSON.stringify(params.data.check);
        },
        filterParams: {
          filterOptions: [
            'empty',
            {
              displayKey: 'filterByKey',
              displayName: 'Filter By Key',
              test: (filterValue: any, cellValue: any): boolean => {
                const json = JSON.parse(cellValue);
                return json[filterValue];
              }
            }
          ]
        },
        sortable: false,
        cellRenderer: this.checkRenderer
      },
      // contextを通してコールバックに任意のデータを渡したいサンプル
      {
        headerName: 'price',
        field: 'price',
        filter: 'agNumberColumnFilter',
        width: 100,
        cellClassRules: {
          'bg-danger': (params: ICellRendererParams) => {
            const nodeId = params.node.id;
            const field = params.colDef.field;
            const value = params.context.rowData[nodeId];
            if (!field || !value) {
              return false;
            }
            return parseInt(params.value, 10) !== value[field];
          }
        },
        editable: true
      },
      {
        headerName: 'data',
        field: 'rawData',
        width: 300,
        filter: 'agTextColumnFilter',
        // オブジェクトはfilterにわたすときに強制的にstringにされてしまうためJSONでシリアライズ,デシリアライズする
        filterValueGetter: (params: ValueGetterParams) => {
          return JSON.stringify(params.data.rawData);
        },
        filterParams: {
          filterOptions: [
            'empty',
            {
              displayKey: 'filterExistKey',
              displayName: 'Filter By Key Exist?',
              test: (filterValue: any, cellValue: any): boolean => {
                const json = JSON.parse(cellValue);
                console.log(json);
                console.log(json.hasOwnProperty(filterValue));
                return json.hasOwnProperty(filterValue);
              }
            }
          ]
        },
        sortable: false,
        cellRenderer: (params: ICellRendererParams) =>
          JSON.stringify(params.value)
      }
    ];

    this.rowData = [
      {
        startDate: '2018-08-01',
        check: { hoge: true, fuga: false, piyo: true },
        price: 100,
        rawData: { gold: 2, silver: 1, bronze: 3 }
      },
      {
        startDate: '2018-08-02',
        check: { hoge: false, fuga: true, piyo: false },
        price: 200,
        rawData: { silver: 3, bronze: 8 }
      },
      {
        startDate: '2019-04-02',
        check: { hoge: false, fuga: false, piyo: true },
        price: 1300,
        rawData: { silver: 7 }
      },
      {
        startDate: '2019-02-15',
        check: { hoge: true, fuga: true, piyo: false },
        price: 500,
        rawData: { gold: 3, bronze: 10 }
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
    console.log('valueChanged', e);
  }

  editted(e: CellValueChangedEvent): void {
    console.log('cellEditted', e);
  }

  downloadCsv(): void {
    const valueIsCheck = (v: unknown): v is CheckedData => {
      if (typeof v !== 'object') {
        return false;
      }
      if (!v) {
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
    if (this.gridOptions.api) {
      this.gridOptions.api.exportDataAsCsv(exportParams);
    }
  }

  clearFilter(): void {
    if (this.gridOptions.api) {
      this.gridOptions.api.setFilterModel(null);
    }
  }

  sortChanged(sort: SortChangedEvent): void {
    this.setHeaderStyle();
  }

  filterChanged(filter: FilterChangedEvent): void {
    this.setHeaderStyle();
  }

  private setHeaderStyle(): void {
    this.gridElement.nativeElement
      .querySelectorAll('div.ag-header-cell')
      .forEach((value: Element) => {
        const sortedAsc = value.querySelector('div.ag-header-cell-sorted-asc');
        const sortedDesc = value.querySelector(
          'div.ag-header-cell-sorted-desc'
        );
        const classNames = value.getAttribute('class');
        const filtered =
          classNames !== null && classNames.match(/ag-header-cell-filtered/);

        const backgroundColor =
          (sortedAsc || sortedDesc) && filtered
            ? '#efd'
            : filtered
            ? '#def'
            : sortedAsc || sortedDesc
            ? '#fde'
            : '';
        this.renderer.setStyle(value, 'background-color', backgroundColor);
      });
  }
}
