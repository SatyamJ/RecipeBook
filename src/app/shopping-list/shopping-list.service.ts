import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';

export class ShoppingListService {
  newIngredientChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Tomatoes', 4),
    new Ingredient('Potatoes', 2)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number): Ingredient {
    return this.ingredients[index];
  }

  addNewIngredient(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
    this.newIngredientChanged.next(this.getIngredients());
  }

  addNewIngredients(newIngredients: Ingredient[]) {
    this.ingredients.push(...newIngredients);
    this.newIngredientChanged.next(this.getIngredients());
  }

  updateIngredient(index: number, ingredient: Ingredient) {
    this.ingredients[index] = ingredient;
    this.newIngredientChanged.next(this.getIngredients());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.newIngredientChanged.next(this.getIngredients());
  }
}
