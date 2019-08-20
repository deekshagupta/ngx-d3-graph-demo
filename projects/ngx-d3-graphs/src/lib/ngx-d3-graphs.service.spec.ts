import { TestBed } from '@angular/core/testing';

import { NgxD3GraphsService } from './ngx-d3-graphs.service';

describe('NgxD3GraphsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxD3GraphsService = TestBed.get(NgxD3GraphsService);
    expect(service).toBeTruthy();
  });
});
