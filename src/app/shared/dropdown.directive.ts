import {Directive, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appDropdownDirective]'
})
export class DropdownDirective implements OnInit {
  @Input() defaultState: boolean;
  @HostBinding('class') dropdownState;
  currentState: boolean;

  constructor() {}

  ngOnInit() {
    this.currentState = this.defaultState;
    if (this.currentState) {
      this.dropdownState = 'btn-group open';
    }else {
      this.dropdownState = 'btn-group';
    }
  }

  @HostListener('click') onClick(eventData: Event) {
    this.currentState = !this.currentState;
    if (this.currentState) {
      this.dropdownState = 'btn-group open';
    }else {
      this.dropdownState = 'btn-group';
    }
  }
}
