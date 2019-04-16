import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridReactiveColumndefComponent } from './ag-grid-reactive-columndef.component';

describe('AgGridReactiveColumndefComponent', () => {
  let component: AgGridReactiveColumndefComponent;
  let fixture: ComponentFixture<AgGridReactiveColumndefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AgGridReactiveColumndefComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridReactiveColumndefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it.skip('should create', () => {
    expect(component).toBeTruthy();
  });
});
