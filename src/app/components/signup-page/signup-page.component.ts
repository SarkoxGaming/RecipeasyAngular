import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserCredentials } from 'src/app/models/user-credentials.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
  signupForm: FormGroup;
  uniqueEmailError: string | null = null;

  constructor(private authService: AuthService, private router: Router) {
    this.signupForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      passwordConfirmation: new FormControl()
    }, this.passwordMatch);

  }

  private passwordMatch(form: AbstractControl): ValidationErrors | null {

    if (form.value?.password != form.value?.passwordConfirmation) {
      return { passwordConfirmationMustMatch: true };
    } else {
      return null
    }
  }

  ngOnInit(): void {
  }

  signUp(): void {
    if (this.authService.signUp(new UserCredentials(this.signupForm.value))) {
      this.router.navigate(['/recipes']);
    } else {
      this.setUniqueEmailError(true);
    }
  }

  onEmailInput() {
    if (this.uniqueEmailError) {
      this.setUniqueEmailError(false);

      this.signupForm.get('email')?.updateValueAndValidity();
    }
  }
  
  private setUniqueEmailError(isUsed: boolean) {
    this.uniqueEmailError = isUsed ? 'This email is already used!' : null;
    this.signupForm.get('email')?.setErrors(isUsed ? { emailNotUnique: true } : null);
  }


}
