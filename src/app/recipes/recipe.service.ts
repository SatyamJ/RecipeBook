import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Puri bhaji', 'A popular North-Indian cusine', 'http://ichef.bbci.co.uk/food/ic/food_16x9_608/cuisines/indian_16x9.jpg'),
    new Recipe('Dal chawal', 'Everyday light food', 'https://i.ytimg.com/vi/48ntdHS-9bs/maxresdefault.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
