import {
  AfterContentInit,
  ContentChildren,
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  QueryList,
  Renderer2,
  SimpleChanges
} from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterEvent,
  RouterLink,
  RouterLinkWithHref,
  UrlSegment
} from '@angular/router';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[routerPathActive]'
})
export class RouterPathActiveDirective
  implements AfterContentInit, OnChanges, OnDestroy {
  @ContentChildren(RouterLink, { descendants: true })
  links: QueryList<RouterLink>; // aタグ以外でのリンク要素
  @ContentChildren(RouterLinkWithHref, { descendants: true })
  linksWithHrefs: QueryList<RouterLinkWithHref>; // aタグでのリンク要素

  private classes: string[] = [];
  private subscription: Subscription;

  public isActive: boolean = false;

  constructor(
    private router: Router,
    private element: ElementRef,
    private renderer: Renderer2
  ) {
    this.subscription = router.events.subscribe((s: RouterEvent) => {
      if (s instanceof NavigationEnd) {
        this.update();
      }
    });
  }

  @Input()
  set routerPathActive(data: string[] | string) {
    const classes = Array.isArray(data) ? data : data.split(' ');
    this.classes = classes.filter(c => !!c);
  }

  ngAfterContentInit(): void {
    this.links.changes.subscribe(_ => this.update());
    this.linksWithHrefs.changes.subscribe(_ => this.update());
    this.update();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.update();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private update() {
    if (!this.links || !this.linksWithHrefs || !this.router.navigated) return;

    Promise.resolve().then(() => {
      const urlSegments = this.router['currentUrlTree']['root']['children'][
        'primary'
      ]['segments'];
      const hasActiveLinks = this.hasActiveLinks(urlSegments);

      if (this.isActive !== hasActiveLinks) {
        this.isActive = hasActiveLinks;
        this.classes.forEach(c => {
          if (hasActiveLinks) {
            this.renderer.addClass(this.element.nativeElement, c);
          } else {
            this.renderer.removeClass(this.element.nativeElement, c);
          }
        });
      }
    });
  }

  private isLinkActive(
    currentSegments: UrlSegment[]
  ): (link: RouterLink | RouterLinkWithHref) => boolean {
    return (link: RouterLink | RouterLinkWithHref) => {
      const currentSegmentPaths = currentSegments.map(segment => segment.path);
      const linkSegmentPaths = link.urlTree.root.children.primary.segments.map(
        segment => segment.path
      );
      if (currentSegmentPaths.length != linkSegmentPaths.length) return false;

      return currentSegmentPaths.every((currentSegmentPath, i, _) => {
        return currentSegmentPath == linkSegmentPaths[i];
      });
    };
  }

  private hasActiveLinks(currentSegments): boolean {
    return (
      this.links.some(this.isLinkActive(currentSegments)) ||
      this.linksWithHrefs.some(this.isLinkActive(currentSegments))
    );
  }
}
