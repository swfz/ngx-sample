import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupingGridComponent } from './grouping-grid.component';

describe('GroupingGridComponent', () => {
  let component: GroupingGridComponent;
  let fixture: ComponentFixture<GroupingGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupingGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupingGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
