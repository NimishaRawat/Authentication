import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  standalone: true,
  imports: [CommonModule,FormsModule ], 
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  email: string = '';
  fullName: string = '';
  password: string = '';
  organizationName: string = '';
  organizationId: string = '';
  designation: string = '';
  birthDate: Date | null = null;
  city: string = '';
  pincode: string = '';
  isStepTwo: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  // Proceed to the next step in the sign-up process
  nextStep() {
    this.isStepTwo = true;
  }

  // Go back to the previous step
  goBack() {
    this.isStepTwo = false;
  }

  // Sign up the user by calling AuthService
  signUp() {
    if (this.authService.isValidOrganization(this.organizationId)) {
      this.authService.signUp({
        email: this.email,
        fullName: this.fullName,
        password: this.password,
        organizationId: this.organizationId,
        designation: this.designation,
        birthDate: this.birthDate,
        city: this.city,
        pincode: this.pincode,
      }).subscribe(() => {
        this.router.navigate(['/login']);
      });
    } else {
      alert('Unknown organization-id');
    }
  }
}
