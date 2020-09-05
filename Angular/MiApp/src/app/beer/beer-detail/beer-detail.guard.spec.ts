import { TestBed, async, inject } from '@angular/core/testing';

import { BeerDetailGuard } from './beer-detail.guard';

describe('BeerDetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeerDetailGuard]
    });
  });

  it('should ...', inject([BeerDetailGuard], (guard: BeerDetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
