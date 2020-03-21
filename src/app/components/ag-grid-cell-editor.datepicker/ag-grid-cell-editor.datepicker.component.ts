import { AfterViewInit, Component, ViewChild } from '@angular/core';
import * as moment from 'moment/moment';
// import { ICellEditorAngularComp } from '../../../../node_modules/ag-grid-angular/src/interfaces';
import { BsDatepickerDirective } from 'ngx-bootstrap';
import { GridApi, ICellEditorParams } from 'ag-grid-community';
import { AgEditorComponent } from 'ag-grid-angular';

@Component({
  selector: 'app-ag-grid-cell-editor.datepicker',
  templateUrl: './ag-grid-cell-editor.datepicker.component.html',
  styleUrls: ['./ag-grid-cell-editor.datepicker.component.scss']
})
export class AgGridCellEditorDatepickerComponent
  implements AgEditorComponent, AfterViewInit {
  public value!: Date;

  @ViewChild('picker', { static: true })
  private bsDatepickerElement!: BsDatepickerDirective;
  private api?: GridApi;

  constructor() {}

  agInit(params: ICellEditorParams): void {
    this.value = moment(params.value).toDate();
    if (params.api) {
      this.api = params.api;
    }
  }

  ngAfterViewInit() {
    console.log('afterViewInit');
    this.bsDatepickerElement.show();
  }

  getValue(): string {
    return moment(this.value).format('YYYY-MM-DD');
  }

  onChangeDate(event: Date): void {
    // TODO: 同じ値を選択した場合自動で閉じられない
    if (this.getValue() !== moment(event).format('YYYY-MM-DD')) {
      this.value = event;
      if (this.api) {
        this.api.stopEditing(false);
      }
    }
  }

  onHidden(event: Event): void {
    console.log('hidden', event);
  }

  onShown(event: Event): void {
    console.log('shown', event);
  }
}
