import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recursive-template',
  templateUrl: './recursive-template.component.html',
  styleUrls: ['./recursive-template.component.scss']
})
export class RecursiveTemplateComponent implements OnInit {

  public stats: any;
  constructor() { }

  ngOnInit() {
    this.stats = [
      {
        id: 1,
        name: 'A001',
        depth: 0,
        children: [
          {
            id: 2,
            name: 'A002',
            depth: 1,
            children:[
              {
                id: 3,
                name: 'A003',
                depth: 2
              }
            ]
          },
          {
            id: 4,
            name: 'A004',
            depth: 1
          }
        ]
      },
      {
        id: 5,
        name: 'B001',
        depth: 0,
        children: [
          {
            id: 6,
            name: 'B002',
            depth: 1,
            children:[
              {
                id: 7,
                name: 'B003',
                depth: 2
              }
            ]
          }
        ]
      }
    ];
  }

}
