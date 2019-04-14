import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-marble-diagram',
  templateUrl: './marble-diagram.component.html',
  styleUrls: ['./marble-diagram.component.scss']
})
export class MarbleDiagramComponent implements OnInit {
  private isDragging: boolean;
  private beforeX: number;

  @ViewChild('value')
  value;

  constructor() {}

  ngOnInit() {
    this.isDragging = false;
    this.beforeX = 0;
  }

  onMouseDown(event) {
    // console.log('mouseDown');
    // console.log(event);
    this.beforeX = event.clientX;
    this.isDragging = true;
    this.updateElement(event);
  }

  onMouseUp(event) {
    // console.log('mouseUp');
    // console.log(event);
    this.isDragging = false;
  }
  onMouseMove(event) {
    const x = this.beforeX - event.clientX;
    // console.log('mouseMove');
    // console.log(event);
    if (this.isDragging) {
      // console.log(this.value.nativeElement.offsetLeft - x);
      // this.value.nativeElement.style.left = this.value.nativeElement.offsetX - x + 'px';
      // console.log(this.value.nativeElement);
      this.value.nativeElement.style['margin-left'] =
        this.value.nativeElement.offsetLeft - x + 'px';
    }
    this.beforeX = event.clientX;
    // this.updateElement(event);
  }

  onMouseOut(event) {
    console.log('mouseOut');
    console.log(event);
    console.log(event.offsetX);
    this.isDragging = false;
  }

  private updateElement(e) {
    // console.log(this.value.nativeElement);
    if (this.isDragging) {
      console.log('moving');
      console.log(e);
      this.value.nativeElement.style.left = +'px';
    }
  }
}
