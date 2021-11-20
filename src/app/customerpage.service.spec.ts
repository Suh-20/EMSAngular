import { TestBed } from '@angular/core/testing';

import { CustomerpageService } from './customerpage.service';

describe('CustomerpageService', () => {
  let service: CustomerpageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerpageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
