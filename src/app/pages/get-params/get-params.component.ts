import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-get-params',
  templateUrl: './get-params.component.html',
  styleUrls: ['./get-params.component.scss']
})
export class GetParamsComponent implements OnInit {

  private queryParams: any;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {
  }

  ngOnInit() {
    this._activatedRoute.queryParams.subscribe(
      params => {
        console.log('queryParams: ',params);
        this.queryParams = params;
      }
    );
  }

}
