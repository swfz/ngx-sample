import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-router-active',
  templateUrl: './router-active.component.html',
  styleUrls: ['./router-active.component.scss']
})
export class RouterActiveComponent implements OnInit {
  public piyoId!: number;
  public currentPath!: string;

  constructor(private router: Router) {}

  ngOnInit() {
    this.piyoId = 0;
    this.currentPath = this.router.url;
  }

  public incrementPiyoId(): void {
    this.piyoId += 1;
  }
}
