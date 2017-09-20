import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursiveTemplateComponent } from './recursive-template.component';

describe('RecursiveTemplateComponent', () => {
  let component: RecursiveTemplateComponent;
  let fixture: ComponentFixture<RecursiveTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecursiveTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecursiveTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
