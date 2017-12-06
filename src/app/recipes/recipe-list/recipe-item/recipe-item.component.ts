import {Component, Input, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import {Recipe} from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() itemSeleted = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  onItemSelect() {
    this.itemSeleted.emit();
  }
}
