import { Component, OnInit } from '@angular/core';
import { FilterKeyupEventsDirective } from '../../../../projects/filter-keyup-events/src/lib/directives/filter-keyup-events.directive';

@Component({
  selector: 'app-wip',
  templateUrl: './wip.component.html',
  styleUrls: ['./wip.component.scss']
})
export class WipComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  filteredText(text: string) {
    console.log('parent component');
    console.log(text);
  }
}
