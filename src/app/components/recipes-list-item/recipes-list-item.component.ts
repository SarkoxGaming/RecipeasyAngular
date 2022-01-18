import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: '[app-recipes-list-item]',
  templateUrl: './recipes-list-item.component.html',
  styleUrls: ['./recipes-list-item.component.css']
})
export class RecipesListItemComponent implements OnInit {

  @Input() recipe!: Recipe;
  @Output() recipeClicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  clicked() {
    this.recipeClicked.emit(this.recipe);
  }
}
