import { TestBed } from '@angular/core/testing';

import { AllSubCatService } from './all-sub-cat.service';

describe('AllSubCatService', () => {
  let service: AllSubCatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllSubCatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
