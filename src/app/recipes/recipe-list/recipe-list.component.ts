import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';

import { Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeListComponent implements OnInit {

  @Output() listItemSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Puri bhaji', 'A popular North-Indian cusine', 'http://ichef.bbci.co.uk/food/ic/food_16x9_608/cuisines/indian_16x9.jpg'),
    new Recipe('Dal chawal', 'Everyday light food', 'https://i.ytimg.com/vi/48ntdHS-9bs/maxresdefault.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

  onlistItemSelect(selectedRecipe: Recipe) {
    this.listItemSelected.emit(selectedRecipe);
  }
}
