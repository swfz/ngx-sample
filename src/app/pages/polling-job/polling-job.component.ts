import { Component, OnInit } from '@angular/core';
import {PollingService} from "../../services/polling.service";

@Component({
  selector: 'app-polling-job',
  templateUrl: './polling-job.component.html',
  styleUrls: ['./polling-job.component.scss']
})
export class PollingJobComponent implements OnInit {

  constructor(
    public pollingService: PollingService
  ) { }

  ngOnInit() {
  }

  polling(){
    this.pollingService.getFile();
  }
}
