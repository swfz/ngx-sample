import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridCellEditor.DatepickerComponent } from './ag-grid-cell-editor.datepicker.component';

describe('AgGridCellEditorDatepickerComponent', () => {
  let component: AgGridCellEditor.DatepickerComponent;
  let fixture: ComponentFixture<AgGridCellEditor.DatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgGridCellEditor.DatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridCellEditor.DatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
