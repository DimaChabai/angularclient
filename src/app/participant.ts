import {User} from './user';
import {Place} from './place';

export class Participant extends User {
  beerType: string;
  name: string;
  confirmed: boolean;
  place: Place;
}
