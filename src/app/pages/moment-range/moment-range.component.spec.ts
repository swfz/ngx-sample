import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentRangeComponent } from './moment-range.component';

describe('MomentRangeComponent', () => {
  let component: MomentRangeComponent;
  let fixture: ComponentFixture<MomentRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MomentRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MomentRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
