import {Recipe} from './recipe.model';
import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

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

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addNewIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
