import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService: AuthService, private router: Router) { }

  get currentUser() {
    return this.authService.currentUser;
  }

  logOut() {
    this.authService.logOut();

    this.router.navigate(['/']);
  }
}
