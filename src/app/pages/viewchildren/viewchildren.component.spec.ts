import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchildrenComponent } from './viewchildren.component';

describe('ViewchildrenComponent', () => {
  let component: ViewchildrenComponent;
  let fixture: ComponentFixture<ViewchildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewchildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewchildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
