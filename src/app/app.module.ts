import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { LoginPage } from './components/login/login.page';
import { SignupPage } from './components/signup/signup.page';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipesComponent } from './components/recipes/recipes.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersListItemComponent } from './components/users-list-item/users-list-item.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';
import { RecipesListItemComponent } from './components/recipes-list-item/recipes-list-item.component';
import { RecipeNewComponent } from './components/recipe-new/recipe-new.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { HomePage } from './components/home/home.page';

@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    SignupPage,
    RecipesComponent,
    ProfileComponent,
    UsersListComponent,
    UsersListItemComponent,
    PageNotFoundComponent,
    RecipesListComponent,
    RecipesListItemComponent,
    RecipeNewComponent,
    RecipeDetailComponent,
    HomePage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
