import { TestBed } from '@angular/core/testing';

import { SocialDatabaseService } from './social-database.service';

describe('SocialDatabaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SocialDatabaseService = TestBed.get(SocialDatabaseService);
    expect(service).toBeTruthy();
  });
});
