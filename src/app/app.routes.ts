import { Routes } from "@angular/router";
import { LoginPageComponent } from "./components/login-page/login-page.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { RecipesComponent } from "./components/recipes/recipes.component";
import { SignupPageComponent } from "./components/signup-page/signup-page.component";


export const AppRoute: Routes = [
    { path: '', component: LoginPageComponent },
    { path: 'signup', component: SignupPageComponent },
    { path: 'recipes', component: RecipesComponent },
    { path: 'profile', component: ProfileComponent },
    { path: '**', component: PageNotFoundComponent },
    
  ];