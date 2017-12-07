import { Component, OnInit, ViewChildren, QueryList, AfterViewChecked, AfterViewInit } from '@angular/core';
import {PopoverDirective} from 'ngx-bootstrap';

@Component({
  selector: 'app-viewchildren',
  templateUrl: './viewchildren.component.html',
  styleUrls: ['./viewchildren.component.scss']
})
export class ViewchildrenComponent implements OnInit, AfterViewChecked, AfterViewInit {

  constructor() { }

  @ViewChildren(PopoverDirective) childPopover: QueryList<PopoverDirective>;

  ngOnInit() {
  }

  ngAfterViewChecked(){
    this.childPopover.forEach(element => {
      console.log("viewChecked");
      // console.log(element);
    });
  }

  ngAfterViewInit(){
    console.log(this.childPopover);
  }

  allOpen(){
    this.childPopover.forEach(element => {
      element.show();
    });
  }

  allHide(){
    this.childPopover.forEach(element => {
      element.hide();
    });
  }
}
