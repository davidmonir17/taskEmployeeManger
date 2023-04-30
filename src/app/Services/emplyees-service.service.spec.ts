import { TestBed } from '@angular/core/testing';

import { EmplyeesServiceService } from './emplyees-service.service';

describe('EmplyeesServiceService', () => {
  let service: EmplyeesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmplyeesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
