import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewContainerRef
} from '@angular/core';
import { ChildWindowComponent } from '../child-window/child-window.component';

@Component({
  selector: 'app-bind-between-window',
  templateUrl: './bind-between-window.component.html',
  styleUrls: ['./bind-between-window.component.scss']
})
export class BindBetweenWindowComponent implements OnInit {
  private w: Window;
  public inputText: string;

  private hash: { [key: string]: string };

  private childComponentRef: any;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    this.hash = { value: '' };
  }

  openWindow(): void {
    this.w = window.open('', '_blank', 'toolbar=0,width=300,height=200');
    // 素のjavascript
    const defaultDiv = document.createElement('div');
    const defaultNode = defaultDiv.appendChild(
      document.createTextNode('New Window!!!')
    );
    const inputTextDiv = document.createElement('div');
    const inputTextNode = inputTextDiv.appendChild(
      document.createTextNode(this.inputText)
    );
    this.w.document.body.appendChild(defaultNode);
    this.w.document.body.appendChild(inputTextNode);
  }

  openComponentWindow(): void {
    this.w = window.open('', '_blank', 'toolbar=0,width=300,height=200');
    console.log(this.w);
    console.log(this.w.document.body);

    const factory = this.componentFactoryResolver.resolveComponentFactory(
      ChildWindowComponent
    );
    this.childComponentRef = this.viewContainerRef.createComponent(factory);
    this.childComponentRef.instance.hash = this.hash;
  }

  onChangeText(event: string) {
    // console.log(event);
    this.hash.value = event;
  }

  closeWindow(): void {
    this.w.close();
  }
}
