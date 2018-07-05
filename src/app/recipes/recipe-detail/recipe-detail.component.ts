import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Recipe } from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  index: number;

  constructor(private recipeService: RecipeService, private activatedRoute: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((pathParams: Params) => {
      this.index = +pathParams['id'];
      this.recipe = this.recipeService.getRecipe(this.index);
    });
  }

  onToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.activatedRoute});
    // this.router.navigate(['../', this.index, 'edit'], {relativeTo: this.activatedRoute});
  }
}
