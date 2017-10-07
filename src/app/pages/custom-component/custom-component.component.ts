import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-component',
  templateUrl: './custom-component.component.html',
  styleUrls: ['./custom-component.component.scss']
})
export class CustomComponentComponent implements OnInit {

  rate: number = 2;
  constructor() { }

  ngOnInit() {
  }

  onChange(e){
    console.log("change");
    console.log(e);
  }

  onBlur(e){
    console.log("blur");
    console.log(e);
  }
}
