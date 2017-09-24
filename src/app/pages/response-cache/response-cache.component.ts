import { Component, OnInit } from '@angular/core';
import {CacheService} from "../../services/cache.service";

@Component({
  selector: 'app-response-cache',
  templateUrl: './response-cache.component.html',
  styleUrls: ['./response-cache.component.scss']
})
export class ResponseCacheComponent {

  public heroes: any;

  constructor(
    private cacheService: CacheService,
  ) { }

  public getHeroes(){
    this.heroes = this.cacheService.getHeroes().subscribe(
      result => {
        this.heroes = result
      },
      error => {
        console.log(error);
      }
    );
  }

}
