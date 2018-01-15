import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Puri bhaji',
      'A popular North-Indian cusine',
      'https://c1.staticflickr.com/5/4115/4945490885_c3dc3fe905_b.jpg',
      [
        new Ingredient('Wheat flour', 5),
        new Ingredient('Cauliflower', 1),
        new Ingredient('Spices', 1)
      ]
    ),
    new Recipe(
      'Dal chawal',
      'Everyday light food',
      'https://c1.staticflickr.com/6/5135/5539113435_9fce607d63_b.jpg',
      [
        new Ingredient('Tur dal', 1),
        new Ingredient('Rice', 2),
        new Ingredient('Ghee', 1)
      ]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addNewIngredients(ingredients);
  }
}
