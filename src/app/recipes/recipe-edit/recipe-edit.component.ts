import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  constructor(private recipeService: RecipeService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (pathParams: Params) => {
          this.id = +pathParams['id'];
          this.editMode = pathParams['id'] != null;
        }
      );
  }

}
