import { TestBed, inject } from '@angular/core/testing';

import { ApiSampleService } from './api-sample.service';

describe('ApiSampleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiSampleService]
    });
  });

  it('should be created', inject(
    [ApiSampleService],
    (service: ApiSampleService) => {
      expect(service).toBeTruthy();
    }
  ));
});
