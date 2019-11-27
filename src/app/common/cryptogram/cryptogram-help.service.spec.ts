import { TestBed } from '@angular/core/testing';

import { CryptogramHelpService } from './cryptogram-help.service';

describe('CryptogramHelpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CryptogramHelpService = TestBed.get(CryptogramHelpService);
    expect(service).toBeTruthy();
  });
});
