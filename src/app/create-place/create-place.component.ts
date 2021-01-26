import { Component, OnInit, Inject } from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {PlaceType} from '../place-type.enum';
import {PlaceServiceService} from '../place-service.service';
import {Place} from '../place';

@Component({
  selector: 'app-create-place',
  templateUrl: './create-place.component.html',
  styleUrls: ['./create-place.component.css']
})
export class CreatePlaceComponent implements OnInit {

  public types = Object.values(PlaceType).filter(value => typeof value != 'number');

  constructor(@Inject(DOCUMENT) private doc: Document, private service: PlaceServiceService) { }

  ngOnInit() {
  }

  setInputMax() {
    const select = this.doc.getElementById('placeType');
    const seats = this.doc.getElementById('seats');
    if (select.value === 'SMALL') {
      seats.max = 10;
    } else if (select.value === 'MEDIUM') {
      seats.max = 15;
    } else {
      seats.max = 20;
    }
  }

  createPlace(seats: string, type: PlaceType) {
    alert(seats);
    alert(type);
    // this.service.create({seats} as Place);
  }

}
