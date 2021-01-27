import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn} from '@angular/forms';
import {PlaceType} from "../place-type.enum";

/** A hero's name can't match the hero's alter ego */
export const placeValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const type = control.get('type');
  const seats = control.get('seats');
  let max = 10;
  if (type.value == PlaceType[PlaceType.SMALL]){
    max = 10;
  }else if( type.value == PlaceType[PlaceType.MEDIUM]){
    max = 15;
  }else if(type.value == PlaceType[PlaceType.LARGE]){
    max = 20;
  }
    return seats.value > max ? {placeInvalid: true} : null;
};

