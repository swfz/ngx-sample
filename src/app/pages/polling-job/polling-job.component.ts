import { Component, OnInit } from '@angular/core';
import {PollingService} from "../../services/polling.service";

@Component({
  selector: 'app-polling-job',
  templateUrl: './polling-job.component.html',
  styleUrls: ['./polling-job.component.scss']
})
export class PollingJobComponent implements OnInit {

  public status: any;

  constructor(
    public pollingService: PollingService
  ) { }

  ngOnInit() {
  }

  download(){
    this.pollingService.download().subscribe(
      status => {
        this.status = status;
      },
      err => {
        this.status = 'fail';
      },
      () => {
        this.status = 'done';
      }
    );
  }
}
