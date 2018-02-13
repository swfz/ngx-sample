import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chartjs',
  templateUrl: './chartjs.component.html',
  styleUrls: ['./chartjs.component.scss']
})
export class ChartjsComponent implements OnInit {

  public data: any;
  public options: any;
  constructor() { }

  ngOnInit() {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          borderColor: '#ff3399',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'Second Dataset',
          borderColor: '#99ff33',
          data: [ 80, 81, 56, 55, 40, 65, 59]
        },
        {
          label: 'Third Dataset',
          borderColor: '#3399ff',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    };

    this.options = {
      tooltips: {
        mode: 'index'
      }
    };
  }
}
