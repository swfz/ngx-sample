import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})
export class ValidationComponent implements OnInit {

  constructor() { }
  public model: any = {};

  ngOnInit() {
  }


  public onSubmit(e){
    console.log(this.model);
    console.log(e);

  }
}
