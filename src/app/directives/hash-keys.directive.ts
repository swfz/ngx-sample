import {
  Directive,
  Input,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[appHashKeys]'
})
export class HashKeysDirective implements OnChanges {
  @Input() appHashKeysOf: any;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    this.viewContainerRef.clear();
    const keys = Object.keys(this.appHashKeysOf);
    keys.forEach(key => {
      const view = this.viewContainerRef.createEmbeddedView(this.templateRef, {
        $implicit: key
      });
    });
  }
}
