import { Component, OnInit } from '@angular/core';
import { CacheService, IHero } from '../../services/cache.service';

@Component({
  selector: 'app-response-cache',
  templateUrl: './response-cache.component.html',
  styleUrls: ['./response-cache.component.scss']
})
export class ResponseCacheComponent {
  public heroes: any;
  public heroes2: any;

  constructor(private cacheService: CacheService) {}

  public getHeroes() {
    this.cacheService.getHeroes().subscribe(
      result => {
        console.log(result);
        this.heroes = result;
      },
      error => {
        console.log(error);
      }
    );
  }

  public getHeroes2() {
    this.cacheService.getHeroes().subscribe(
      result => {
        console.log(result);
        this.heroes2 = result;
      },
      error => {
        console.log(error);
      }
    );
  }

  public getHero(id: number) {
    this.cacheService.getHero(id).subscribe(
      hero => {
        console.log(hero);
      },
      error => {
        console.log(error);
      }
    );
  }
}
