import { TestBed } from '@angular/core/testing';

import { ServicioStatsService } from './servicio-stats.service';

describe('ServicioStatsService', () => {
  let service: ServicioStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
