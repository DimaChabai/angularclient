import { Component, OnInit } from '@angular/core';
import {Participant} from '../participant';
import {ParticipantServiceService} from '../participant-service.service';

@Component({
  selector: 'app-participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.css']
})
export class ParticipantListComponent implements OnInit {

  participants: Participant[];

  constructor(private participantService: ParticipantServiceService) { }

  ngOnInit() {
    this.participantService.getAll().subscribe(data => {
      this.participants = data;
    });
  }

}
