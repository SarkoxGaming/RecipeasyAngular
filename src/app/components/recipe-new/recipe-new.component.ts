import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/models/recipe.model';
import { AuthService } from 'src/app/services/auth.service';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-new',
  templateUrl: './recipe-new.component.html',
  styleUrls: ['./recipe-new.component.css']
})
export class RecipeNewComponent implements OnInit {
  addRecipeForm: FormGroup;
  uniqueEmailError: string | null = null;

  constructor(private authService: AuthService, private recipeService: RecipeService, private router: Router) {
    this.addRecipeForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      categorie: new FormControl(null, [Validators.required]),
    });

  }

  ngOnInit(): void {
  }

  addRecipe(): void {
    this.addRecipeForm.value.id = Math.random().toString(16).substring(2);
    this.addRecipeForm.value.user = this.authService.currentUser;
    this.addRecipeForm.value.categorie = +this.addRecipeForm.value.categorie;
    if (this.recipeService.addRecipe(new Recipe(this.addRecipeForm.value))) {
      this.router.navigate(['/recipes']);
    }
  }

}
