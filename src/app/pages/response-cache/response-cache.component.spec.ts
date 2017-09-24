import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseCacheComponent } from './response-cache.component';

describe('ResponseCacheComponent', () => {
  let component: ResponseCacheComponent;
  let fixture: ComponentFixture<ResponseCacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponseCacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseCacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
