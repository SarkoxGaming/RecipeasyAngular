import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  passwordControl: FormControl;
  authError: string | null = null;
  
  constructor(private authService: AuthService, private router: Router) { 
    this.passwordControl = new FormControl(null, [Validators.required, Validators.minLength(3)])
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: this.passwordControl
    });
  }

  ngOnInit(): void {

  }

  logIn() : void {
    if (this.authService.logIn(this.loginForm.value)) {
      this.router.navigate(['/recipes']);
    } else {
      this.authError = "Invalid credentials!";
    }
  }

}
