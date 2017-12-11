import { HttpClient } from '@angular/common/http';
import { AllUserData } from '../../../shared/to/all-user-data';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ThreadsService {

  constructor(private http: HttpClient) { 
  }

  loadUserThreads(): Observable<AllUserData> {
    return this.http.get<AllUserData>('/api/threads');
  }
}
