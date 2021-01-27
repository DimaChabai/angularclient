import {Injectable} from '@angular/core';
import {Place} from './place';
import {catchError, tap} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {of} from "rxjs/observable/of";

@Injectable()
export class PlaceServiceService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      alert(error);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  create(place: Place): Observable<any> {
    return this.http.post('http://localhost:8080/place/create', place);
  }

}
