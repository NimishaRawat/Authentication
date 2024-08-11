import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfig {
  dummyData = {
    users: [
      { email: 'user1@example.com', password: 'password123' },
      { email: 'user2@example.com', password: 'password456' },
    ],
    organizations: [
      { id: 'org1', name: 'Organization One' },
      { id: 'org2', name: 'Organization Two' },
    ],
    designations: ['Manager', 'Developer', 'Tester'],
  };
}
