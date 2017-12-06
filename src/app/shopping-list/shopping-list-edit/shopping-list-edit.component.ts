import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, ViewEncapsulation} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInputElement') nameElement: ElementRef;
  @ViewChild('amountInputElement') amountElement: ElementRef;
  @Output() newItemAdded = new EventEmitter<Ingredient>();

  constructor() {
  }

  ngOnInit() {
  }

  addNewItem() {
    this.newItemAdded.emit(new Ingredient(this.nameElement.nativeElement.value, Number(this.amountElement.nativeElement.value)));
  }
}
