import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule,FormsModule], // Add CommonModule here
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent {
  email: string = '';
  phoneNumber: string = '';

  constructor(private router: Router) {}

  onNextClick(): void {
    // Logic to decide if the user should be taken to signup
    // Here we're simply navigating to the signup page
    this.router.navigate(['/signup']);
  }
}
