import { TestBed } from '@angular/core/testing';

import { LcStrageService } from './lc-strage.service';

describe('LcStrageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LcStrageService = TestBed.get(LcStrageService);
    expect(service).toBeTruthy();
  });
});
