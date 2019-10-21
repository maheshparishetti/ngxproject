import { TestBed } from '@angular/core/testing';

import { ServicefileService } from './servicefile.service';

describe('ServicefileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicefileService = TestBed.get(ServicefileService);
    expect(service).toBeTruthy();
  });
});
