import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { appConfig } from '../app.config';
import { Organization } from '../model.ts'; 
import { AppConfig } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private appConfig: AppConfig) {}

  // Fetch organizations from the dummy data
  getOrganizations(): Observable<Organization[]> {
    // Simulate an HTTP request with dummy data
    return of(this.appConfig.dummyData.organizations);
  }
}
