import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { routes } from './app.routes'; // Ensure this import path is correct
import { AuthService } from './services/auth.service';
import { Injectable } from '@angular/core';

// Dummy data service
@Injectable({
  providedIn: 'root',
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

// Angular configuration
export const appConfig = {
  providers: [
    provideHttpClient(withInterceptorsFromDi()), // Add any HTTP interceptors if needed
    provideRouter(routes), // Configure the router with the routes
    AuthService,
    AppConfig // Provide the AppConfig service
  ],
  declarations: [
    SignupComponent,
    LoginComponent,
    WelcomeComponent
  ]
};
