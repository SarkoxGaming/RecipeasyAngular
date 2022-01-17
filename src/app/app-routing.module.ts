import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { AppRoute } from './app.routes';

@NgModule({
  imports: [RouterModule.forRoot(AppRoute)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

