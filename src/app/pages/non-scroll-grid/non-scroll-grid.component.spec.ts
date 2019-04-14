import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonScrollGridComponent } from './non-scroll-grid.component';

describe('NonScrollGridComponent', () => {
  let component: NonScrollGridComponent;
  let fixture: ComponentFixture<NonScrollGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NonScrollGridComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonScrollGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
