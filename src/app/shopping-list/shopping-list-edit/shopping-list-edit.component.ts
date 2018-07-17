import {Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') shoppingListForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editIndex = -1;
  edittingIngredient: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing
      .subscribe( (index: number) => {
        this.editMode = true;
        this.editIndex = index;
        this.edittingIngredient = this.shoppingListService.getIngredient(index);
        this.shoppingListForm.form.setValue({
          'name': this.edittingIngredient.name,
          'amount': this.edittingIngredient.amount
        });
    });
  }

  addNewItem(form: NgForm) {
    const value = form.value;
    const ingredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editIndex, ingredient);
    } else {
      this.shoppingListService.addNewIngredient(ingredient);
    }
    this.editMode = false;
    this.shoppingListForm.reset();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onClear() {
    this.shoppingListForm.form.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editIndex);
    this.onClear();
  }
}
