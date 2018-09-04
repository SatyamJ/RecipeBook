import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownDirective} from './dropdown.directive';

@NgModule({
  exports: [DropdownDirective, CommonModule],
  declarations: [DropdownDirective]
})
export class SharedModule {}
