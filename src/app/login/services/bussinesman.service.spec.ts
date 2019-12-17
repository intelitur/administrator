import { TestBed } from '@angular/core/testing';

import { BusinessmanService } from './bussinesman.service';

describe('BussinessmanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BusinessmanService = TestBed.get(BusinessmanService);
    expect(service).toBeTruthy();
  });
});
