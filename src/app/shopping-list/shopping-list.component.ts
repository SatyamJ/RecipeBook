import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Tomatoes', 4),
    new Ingredient('Potatoes', 2)
  ];
  constructor() { }

  ngOnInit() {
  }

  addNewIngredient(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
  }
}
