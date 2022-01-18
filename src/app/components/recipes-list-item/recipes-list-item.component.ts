import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: '[app-recipes-list-item]',
  templateUrl: './recipes-list-item.component.html',
  styleUrls: ['./recipes-list-item.component.css']
})
export class RecipesListItemComponent implements OnInit {

  @Input() recipe!: Recipe;
  @Output() recipeEditClicked = new EventEmitter();
  @Output() recipeDeleteClicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  edit() {
    this.recipeEditClicked.emit(this.recipe);
  }
  delete() {
    this.recipeDeleteClicked.emit(this.recipe);
  }
}
