import { TestBed, inject } from '@angular/core/testing';

import { ApiSampleService, User } from './api-sample.service';
import { HttpClient, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

// export class Dummy {
//   handle(req: HttpRequest<any>): Observable<HttpEvent<any>>;
// }

describe('ApiSampleService', () => {
  beforeEach(() => {
    const spy = jasmine.createSpyObj('HttpClient', ['handle'])
    TestBed.configureTestingModule({
      providers: [
        ApiSampleService,
        { provide: HttpClient, useValue: spy }
      ]
    });
  });

  it.skip('should be created', inject(
    [ApiSampleService],
    (service: ApiSampleService) => {
      expect(service).toBeTruthy();
    }
  ));
});
