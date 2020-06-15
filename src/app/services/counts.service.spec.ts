import { TestBed } from '@angular/core/testing';

import { CountsService } from './counts.service';

describe('CountsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountsService = TestBed.get(CountsService);
    expect(service).toBeTruthy();
  });
});
