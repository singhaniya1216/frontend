import { TestBed } from '@angular/core/testing';

import { SpringhttpService } from './springhttp.service';

describe('SpringhttpService', () => {
  let service: SpringhttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpringhttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
