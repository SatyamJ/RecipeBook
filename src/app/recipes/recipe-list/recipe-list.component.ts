import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Puri bhaji', 'A popular North-Indian cusine', 'http://ichef.bbci.co.uk/food/ic/food_16x9_608/cuisines/indian_16x9.jpg'),
    new Recipe('Puri bhaji', 'A popular North-Indian cusine', 'http://ichef.bbci.co.uk/food/ic/food_16x9_608/cuisines/indian_16x9.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
