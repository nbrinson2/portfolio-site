import { TestBed } from '@angular/core/testing';

import { AwsSignerService } from './aws-signer.service';

describe('AwsSignerService', () => {
  let service: AwsSignerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AwsSignerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
