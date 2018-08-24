import {AfterViewInit, Component, ViewChild} from '@angular/core';
import * as moment from 'moment/moment';
import {ICellEditorAngularComp} from '../../../../node_modules/ag-grid-angular/src/interfaces';

@Component({
  selector: 'app-ag-grid-cell-editor.datepicker',
  templateUrl: './ag-grid-cell-editor.datepicker.component.html',
  styleUrls: ['./ag-grid-cell-editor.datepicker.component.scss']
})
export class AgGridCellEditorDatepickerComponent implements ICellEditorAngularComp,AfterViewInit{

  public datepickerModel: Date;
  @ViewChild('picker') bsDatepickerElement;

  constructor() { }

  agInit(){
  }

  ngAfterViewInit() {
    this.bsDatepickerElement.show();
  }

  getValue(): string {
    return moment(this.datepickerModel).format('YYYY-MM-DD');
  }
}
