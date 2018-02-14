import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridFlexBoxComponent } from './ag-grid-flex-box.component';

describe('AgGridFlexBoxComponent', () => {
  let component: AgGridFlexBoxComponent;
  let fixture: ComponentFixture<AgGridFlexBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgGridFlexBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridFlexBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
