import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../model.ts'; // Adjust import paths as needed

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: User[] = []; // Dummy user data for authentication
  private organizations: string[] = []; // Dummy organization IDs

  constructor() {}

  // Simulate a login process
  login(email: string, password: string): boolean {
    return this.users.some(user => user.email === email && user.password === password);
  }

  // Simulate organization validation
  isValidOrganization(organizationId: string): boolean {
    return this.organizations.includes(organizationId);
  }

  // Simulate a sign-up process
  signUp(user: User): Observable<void> {
    // Add the user to the dummy data (for demonstration purposes)
    this.users.push(user);

    // Simulate a delay with of(null) and return an observable
    return of(void 0);
  }
}
