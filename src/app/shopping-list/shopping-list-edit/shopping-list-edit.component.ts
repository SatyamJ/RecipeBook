import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, ViewEncapsulation} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInputElement') nameElement: ElementRef;
  @ViewChild('amountInputElement') amountElement: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
  }

  addNewItem() {
    this.shoppingListService.addNewIngredient(
      new Ingredient(this.nameElement.nativeElement.value, Number(this.amountElement.nativeElement.value))
    );
  }
}
