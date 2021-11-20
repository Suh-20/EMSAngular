import { TestBed } from '@angular/core/testing';

import { BookpaymentService } from './bookpayment.service';

describe('BookpaymentService', () => {
  let service: BookpaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookpaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
