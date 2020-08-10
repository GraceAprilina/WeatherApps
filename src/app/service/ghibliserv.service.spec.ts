import { TestBed } from '@angular/core/testing';

import { GhibliservService } from './ghibliserv.service';

describe('GhibliservService', () => {
  let service: GhibliservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GhibliservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
