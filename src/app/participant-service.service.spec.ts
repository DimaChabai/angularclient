import { TestBed, inject } from '@angular/core/testing';

import { ParticipantServiceService } from './participant-service.service';

describe('ParticipantServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParticipantServiceService]
    });
  });

  it('should be created', inject([ParticipantServiceService], (service: ParticipantServiceService) => {
    expect(service).toBeTruthy();
  }));
});
