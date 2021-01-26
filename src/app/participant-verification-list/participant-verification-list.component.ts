import {Component, OnInit} from '@angular/core';
import {Participant} from '../participant';
import {ParticipantServiceService} from '../participant-service.service';

@Component({
  selector: 'app-participant-verification-list',
  templateUrl: './participant-verification-list.component.html',
  styleUrls: ['./participant-verification-list.component.css']
})
export class ParticipantVerificationListComponent implements OnInit {

  participants: Participant[];

  constructor(private participantService: ParticipantServiceService) {
  }

  ngOnInit() {
    this.participantService.getVerificationParticipants().subscribe(data => {
      this.participants = data;
    });
  }

  accept(part: Participant) {
    this.participantService.accept(part).subscribe(data => {
      this.participants = data;
    });
  }

  decline(part: Participant) {
    this.participantService.decline(part).subscribe(data => {
      this.participants = data;
    });
  }
}
