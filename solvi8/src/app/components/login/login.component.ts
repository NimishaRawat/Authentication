import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [CommonModule,FormsModule], // Add CommonModule here
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  isLoginFailed: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  // Attempt to log in the user by calling AuthService
  login() {
    if (this.authService.login(this.email, this.password)) {
      this.router.navigate(['']);
    } else {
      this.isLoginFailed = true;
    }
  }
}
