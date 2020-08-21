import { TestBed } from '@angular/core/testing';

import { FacebSdkService } from './faceb-sdk.service';

describe('FacebSdkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FacebSdkService = TestBed.get(FacebSdkService);
    expect(service).toBeTruthy();
  });
});
