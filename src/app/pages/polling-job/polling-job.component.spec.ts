import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollingJobComponent } from './polling-job.component';

describe('PollingJobComponent', () => {
  let component: PollingJobComponent;
  let fixture: ComponentFixture<PollingJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollingJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollingJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
