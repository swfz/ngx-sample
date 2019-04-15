import { RouterPathActiveDirective } from './router-path-active.directive';
import {ElementRef, Renderer2} from "@angular/core";
import {Router} from "@angular/router";
import {TestBed} from "@angular/core/testing";

describe('RouterPathActiveDirective', () => {
  let router: Router;
  let elementRef: ElementRef;
  let renderer2: Renderer2;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [Router, ElementRef, Renderer2] });
    let router = TestBed.get(Router);
    let elementRef = TestBed.get(ElementRef);
    let renderer2 = TestBed.get(Renderer2);
  });

  it('should create an instance', () => {

    const directive = new RouterPathActiveDirective(router, elementRef, renderer2);
    expect(directive).toBeTruthy();
  });
});
