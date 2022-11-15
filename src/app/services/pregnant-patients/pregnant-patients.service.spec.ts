import { TestBed } from '@angular/core/testing';

import { PregnantPatientsService } from './pregnant-patients.service';

describe('PregnantPatientsService', () => {
  let service: PregnantPatientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PregnantPatientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
