import { Component, OnInit } from '@angular/core';

import * as m from 'moment';
import { extendMoment } from 'moment-range';
const moment = extendMoment(m);

@Component({
  selector: 'app-moment-range',
  templateUrl: './moment-range.component.html',
  styleUrls: ['./moment-range.component.scss']
})
export class MomentRangeComponent implements OnInit {

  constructor() { }

  public range1: any;
  public range2: any;
  public range3: any;
  public isOverlap1and2: boolean;
  public isOverlap2and3: boolean;

  ngOnInit() {
    this.range1 = moment().range(
      moment().startOf('month'),
      moment().endOf('month')
    );
    this.range2 = moment().range(
      moment().startOf('day'),
      moment().add(1, 'day').endOf('day')
    );
    this.range3 = moment().range(
      moment().add(3, 'day').startOf('day'),
      moment().add(5, 'day').endOf('day')
    );

    this.isOverlap1and2 = this.range1.overlaps(this.range2);
    this.isOverlap2and3 = this.range2.overlaps(this.range3);
  }

}
