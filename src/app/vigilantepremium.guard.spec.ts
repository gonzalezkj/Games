import { TestBed } from '@angular/core/testing';

import { VigilantepremiumGuard } from './vigilantepremium.guard';

describe('VigilantepremiumGuard', () => {
  let guard: VigilantepremiumGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VigilantepremiumGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
