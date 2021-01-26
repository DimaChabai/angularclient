import { Injectable } from '@angular/core';
import {Place} from './place';
import {catchError, tap} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class PlaceServiceService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  create(place: Place): Observable<any> {
    return this.http.post('localhost:8080/place/create', hero, this.httpOptions);
  }

}
