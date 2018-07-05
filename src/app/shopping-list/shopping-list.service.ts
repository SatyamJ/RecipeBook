import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';

export class ShoppingListService {
  newIngredientChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Tomatoes', 4),
    new Ingredient('Potatoes', 2)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addNewIngredient(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
    this.newIngredientChanged.next(this.getIngredients());
  }

  addNewIngredients(newIngredients: Ingredient[]) {
    this.ingredients.push(...newIngredients);
    this.newIngredientChanged.next(this.getIngredients());
  }
}
