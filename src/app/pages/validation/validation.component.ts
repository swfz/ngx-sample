import { Component, OnInit } from '@angular/core';

export interface ISampleModel {
  name?: string;
  type?: string;
  price?: number;
}

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})
export class ValidationComponent implements OnInit {
  public model!: ISampleModel;

  constructor() {}

  ngOnInit() {
    this.model = {};
  }

  public onSubmit() {
    console.log(this.model);
  }
}
