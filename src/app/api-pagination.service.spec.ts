import { TestBed } from '@angular/core/testing';

import { ApiPaginationService } from './api-pagination.service';

describe('ApiPaginationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiPaginationService = TestBed.get(ApiPaginationService);
    expect(service).toBeTruthy();
  });
});
