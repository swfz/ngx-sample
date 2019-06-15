import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-params',
  templateUrl: './get-params.component.html',
  styleUrls: ['./get-params.component.scss']
})
export class GetParamsComponent implements OnInit {
  private queryParams: any;
  public count!: number;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this.queryParams = this._activatedRoute.snapshot.queryParams;
    this.count = parseInt(this.queryParams.count, 10) || 0;
  }

  countUp(): void {
    this.count = this.count + 1;
    const route = this._activatedRoute.routeConfig;
    if (!route) {
      return;
    }
    this._router.navigate([route.path], {
      queryParams: { count: this.count }
    });
  }
}
