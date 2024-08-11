import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../model.ts';
import { usersMock } from '../mocks/users.mock.js'; // Import the users mock data
import { organizationsMock } from '../mocks/orgs.mock.js'; // Import the organizations mock data

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: User[] = usersMock; // Use the mock data for users
  private organizations = organizationsMock; // Use the mock data for organizations

  constructor() {}

  // Simulate a login process
  login(email: string, password: string): boolean {
    return this.users.some(user => user.email === email && user.password === password);
  }

  // Simulate organization validation
  isValidOrganization(organizationId: string): boolean {
    return this.organizations.some(org => org.id === organizationId);
  }

  // Simulate a sign-up process
  signUp(user: User): Observable<void> {
    // Add the user to the mock data (for demonstration purposes)
    this.users.push(user);

    // Simulate a delay with of(null) and return an observable
    return of(void 0);
  }
}
