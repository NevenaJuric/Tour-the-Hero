/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MessageSpecService } from './message-spec.service';

describe('Service: MessageSpec', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageSpecService]
    });
  });

  it('should ...', inject([MessageSpecService], (service: MessageSpecService) => {
    expect(service).toBeTruthy();
  }));
});
