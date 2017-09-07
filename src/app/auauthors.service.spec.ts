import { TestBed, inject } from '@angular/core/testing';

import { AuauthorsService } from './auauthors.service';

describe('AuauthorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuauthorsService]
    });
  });

  it('should be created', inject([AuauthorsService], (service: AuauthorsService) => {
    expect(service).toBeTruthy();
  }));
});
