import { AfterViewInit, Component, ViewChild } from '@angular/core';
import * as moment from 'moment/moment';
import { ICellEditorAngularComp } from '../../../../node_modules/ag-grid-angular/src/interfaces';
import { BsDatepickerDirective } from 'ngx-bootstrap';
import { ICellEditorParams } from 'ag-grid-community';

@Component({
  selector: 'app-ag-grid-cell-editor.datepicker',
  templateUrl: './ag-grid-cell-editor.datepicker.component.html',
  styleUrls: ['./ag-grid-cell-editor.datepicker.component.scss']
})
export class AgGridCellEditorDatepickerComponent
  implements ICellEditorAngularComp, AfterViewInit {
  public datepickerModel: Date;

  @ViewChild('picker')
  private bsDatepickerElement: BsDatepickerDirective;

  constructor() {}

  agInit(params: ICellEditorParams): void {
    console.log('init', params);
  }

  ngAfterViewInit() {
    this.bsDatepickerElement.show();
  }

  getValue(): string {
    return moment(this.datepickerModel).format('YYYY-MM-DD');
  }
}
