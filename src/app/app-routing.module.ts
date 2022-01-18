import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './components/login/login.page';
import { SignupPage } from './components/signup/signup.page';
import { AppRoute } from './app.routes';

@NgModule({
  imports: [RouterModule.forRoot(AppRoute)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

