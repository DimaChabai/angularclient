import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantVerificationListComponent } from './participant-verification-list.component';

describe('ParticipantVerificationListComponent', () => {
  let component: ParticipantVerificationListComponent;
  let fixture: ComponentFixture<ParticipantVerificationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipantVerificationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantVerificationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
