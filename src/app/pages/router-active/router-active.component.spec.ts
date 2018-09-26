import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterActiveComponent } from './router-active.component';

describe('RouterActiveComponent', () => {
  let component: RouterActiveComponent;
  let fixture: ComponentFixture<RouterActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RouterActiveComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
