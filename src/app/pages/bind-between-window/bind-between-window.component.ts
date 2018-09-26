import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind-between-window',
  templateUrl: './bind-between-window.component.html',
  styleUrls: ['./bind-between-window.component.scss']
})
export class BindBetweenWindowComponent implements OnInit {

  private w: Window;
  public inputText: string;

  constructor() { }

  ngOnInit() {
  }

  openWindow(): void{
    this.w = window.open('', '_blank', 'toolbar=0,width=300,height=200')
    // 素のjavascript
    const defaultDiv = document.createElement('div');
    const defaultNode = defaultDiv.appendChild(document.createTextNode('New Window!!!'));
    const inputTextDiv = document.createElement('div');
    const inputTextNode = inputTextDiv.appendChild(document.createTextNode(this.inputText))
    this.w.document.body.appendChild(defaultNode);
    this.w.document.body.appendChild(inputTextNode);
  }

  closeWindow(): void {
    this.w.close();
  }
}
