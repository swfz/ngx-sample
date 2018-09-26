import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-component',
  templateUrl: './custom-component.component.html',
  styleUrls: ['./custom-component.component.scss']
})
export class CustomComponentComponent implements OnInit {
  rate: number = 2;
  timetable: any;
  tableRowLabels: string[];
  tableColLabels: string[];
  constructor() {}

  ngOnInit() {
    this.tableRowLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    this.tableColLabels = Array.from(Array(24).keys()).map(_ => _.toString());
  }

  onChange(e) {
    console.log('change');
    console.log(e);
  }

  onBlur(e) {
    console.log('blur');
    console.log(e);
  }
}
