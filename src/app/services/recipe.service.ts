import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private readonly CURRENT_USER_KEY = 'recipeasy.currentUser';
  private readonly RECIPES_KEY = 'recipeasy.recipes';


  getUserRecipes(user: User): Recipe[] {
    let userRecipes : Recipe[] = [];
    const storedRecipes = JSON.parse(localStorage.getItem(this.RECIPES_KEY) ?? 'null');

    if (storedRecipes) {
      console.log(storedRecipes)
      userRecipes = (storedRecipes as Recipe[]).map(obj =>
        new Recipe(obj)
      ).filter(obj => obj.user.email == user.email);
    }

    return userRecipes;
  }

  get recipes(): Recipe[] {
    let recipes : Recipe[] = [];
    const storedUsers = JSON.parse(localStorage.getItem(this.RECIPES_KEY) ?? 'null');

    if (storedUsers) {
      recipes = (storedUsers as Recipe[]).map(obj =>
        new Recipe(obj)
      );
    }

    return recipes;
  }

  addRecipe(recipe: Recipe): boolean {
    let Recipes = this.recipes;

    Recipes.push(recipe);
    localStorage.setItem(this.RECIPES_KEY, JSON.stringify(Recipes));

    return true;
  }

  constructor() {
  }



}
