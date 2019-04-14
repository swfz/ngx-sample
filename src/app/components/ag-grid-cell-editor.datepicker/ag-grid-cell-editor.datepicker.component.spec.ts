import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridCellEditorDatepickerComponent } from './ag-grid-cell-editor.datepicker.component';

describe('AgGridCellEditorDatepickerComponent', () => {
  let component: AgGridCellEditor.DatepickerComponent;
  let fixture: ComponentFixture<AgGridCellEditorDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AgGridCellEditor.DatepickerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridCellEditorDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});