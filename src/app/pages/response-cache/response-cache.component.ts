import { AfterViewInit, Component } from '@angular/core';
import {CacheService, Hero} from '../../services/cache.service';
import { Log, LogService } from '../../services/log.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-response-cache',
  templateUrl: './response-cache.component.html',
  styleUrls: ['./response-cache.component.scss']
})
export class ResponseCacheComponent {
  public heroes$: Observable<Hero[]>; public users: any;
  public logs: Log[];

  constructor(
    private cacheService: CacheService,
    private logService: LogService
  ) {
    this.clearLogs();
    this.logService.messages$.subscribe(log => {
      this.logs.push(log);
    });

    this.heroes$ = this.cacheService.heroes$;
  }

  private clearLogs(): void {
    this.logs = [];
  }

  public getHeroes() {
    this.cacheService.getHeroes();
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

  public getUsers() {
    this.cacheService.getUsers().subscribe(
      users => {
        console.log(users);
        this.users = users;
      },
      error => {
        console.log(error);
      }
    );
  }

  public getUsers2() {
    this.cacheService.getUsers().subscribe(
      users => {
        console.log(users);
        this.users = users;
      },
      error => {
        console.log(error);
      }
    );
  }

  public getUsersWithParams() {
    this.cacheService
      .getUserWithParams({
        hoge: 1,
        fuga: 'piyo'
      })
      .subscribe(
        users => {
          console.log(users);
          this.users = users;
        },
        error => {
          console.log(error);
        }
      );
  }
}
