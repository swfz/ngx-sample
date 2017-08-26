import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatFocusoutComponent } from './format-focusout.component';

describe('FormatFocusoutComponent', () => {
  let component: FormatFocusoutComponent;
  let fixture: ComponentFixture<FormatFocusoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormatFocusoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatFocusoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
