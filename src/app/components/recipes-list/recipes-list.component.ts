import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/models/recipe.model';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  constructor(private recipeService: RecipeService, private authService: AuthService, private router: Router) { }

  get currentUser() {
    return this.authService.currentUser;
  }

  get recipes(): Recipe[] {
    return this.recipeService.getUserRecipes(<User> this.authService.currentUser);
  }

  ngOnInit(): void {
  }

  recipeEditClicked(recipe: Recipe) {
    this.router.navigate(['/recipes', recipe.id]);
  }

  recipeDeleteClicked(recipe: Recipe) {
    this.recipeService.deleteRecipe(recipe);
  }

}
