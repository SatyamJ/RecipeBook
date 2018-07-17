import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  editForm: FormGroup;
  constructor(private recipeService: RecipeService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (pathParams: Params) => {
          this.id = +pathParams['id'];
          this.editMode = pathParams['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    console.log(this.editForm);
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, this.editForm.value);
    } else {
      this.recipeService.addRecipe(this.editForm.value);
    }
    this.onCancel();
  }

  onAddIngridient() {
    (<FormArray>this.editForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9][0-9]*$/)
        ])
      })
    );
  }

  onCancel() {
    this.router.navigate(['/..'], {relativeTo: this.activatedRoute});
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.editForm.get('ingredients')).removeAt(index);
  }

  private initForm() {
    let recipeName = '';
    let imagePath = '';
    let description = '';
    const ingredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      imagePath = recipe.imagePath;
      description = recipe.description;
      if (recipe.ingredients) {
        for (const ingredient of recipe.ingredients) {
          ingredients.push(new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9][0-9]*$/)
              ])
          }));
        }
      }
    }

    this.editForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imagePath: new FormControl(imagePath, Validators.required),
      description: new FormControl(description, Validators.required),
      ingredients: ingredients
    });
  }
}
