import { TestBed } from '@angular/core/testing';

import { HomeEndpointsService } from './home-endpoints.service';

describe('HomeEndpointsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomeEndpointsService = TestBed.get(HomeEndpointsService);
    expect(service).toBeTruthy();
  });
});
