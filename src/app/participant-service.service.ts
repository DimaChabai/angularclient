import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Participant} from './participant';

@Injectable()
export class ParticipantServiceService {

  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<Participant[]> {
    return this.http.get<Participant[]>('http://localhost:8080/participant/list');
  }

  public getVerificationParticipants(): Observable<Participant[]> {
    return this.http.get<Participant[]>('http://localhost:8080/participant/verification');
  }

  public accept(part: Participant): Observable<Participant[]> {
    return this.http.get<Participant[]>('http://localhost:8080/participant/' + part.id + '/accept');
  }

  public decline(part: Participant): Observable<Participant[]> {
    return this.http.get<Participant[]>('http://localhost:8080/participant/' + part.id + '/decline');
  }
}
