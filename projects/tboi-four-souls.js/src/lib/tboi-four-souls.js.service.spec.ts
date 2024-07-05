import { TestBed } from '@angular/core/testing';

import { TboiFourSoulsJsService } from './tboi-four-souls.js.service';

describe('TboiFourSoulsJsService', () => {
  let service: TboiFourSoulsJsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TboiFourSoulsJsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
