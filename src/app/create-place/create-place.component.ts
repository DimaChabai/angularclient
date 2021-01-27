import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {PlaceType} from '../place-type.enum';
import {PlaceServiceService} from '../place-service.service';
import {FormControl, FormGroup} from "@angular/forms";
import { Place } from 'app/place';
import {placeValidator} from "../shared/place-validator.directive";

@Component({
  selector: 'app-create-place',
  templateUrl: './create-place.component.html',
  styleUrls: ['./create-place.component.css']
})
export class CreatePlaceComponent implements OnInit {

  public types = Object.values(PlaceType).filter(value => typeof value != 'number');
  public place = {type: this.types[0], seats:0};
  heroForm: FormGroup;
  constructor(@Inject(DOCUMENT) private doc: Document, private service: PlaceServiceService) {
  }

  ngOnInit() {
    this.heroForm = new FormGroup({
      'type': new FormControl(this.place.type),
      'seats': new FormControl(this.place.seats)
    },{ validators: placeValidator});
  }

  createPlace(seats: number, type: PlaceType) {
    this.service.create({seats, type} as Place).subscribe(data=>alert(data));
  }

}
