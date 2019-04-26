import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindBetweenWindowComponent } from './bind-between-window.component';

describe('BindBetweenWindowComponent', () => {
  let component: BindBetweenWindowComponent;
  let fixture: ComponentFixture<BindBetweenWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BindBetweenWindowComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindBetweenWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it.skip('should create', () => {
    expect(component).toBeTruthy();
  });
});
