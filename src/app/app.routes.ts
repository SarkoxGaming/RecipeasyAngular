import { Routes } from "@angular/router";
import { LoginPage } from "./components/login/login.page";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { RecipesComponent } from "./components/recipes/recipes.component";
import { SignupPage } from "./components/signup/signup.page";


export const AppRoute: Routes = [
    { path: '', component: LoginPage },
    { path: 'signup', component: SignupPage },
    { path: 'recipes', component: RecipesComponent },
    { path: 'profile', component: ProfileComponent },
    { path: '**', component: PageNotFoundComponent },

  ];
