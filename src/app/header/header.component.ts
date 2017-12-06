import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  @Output() tabSelected = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onSelectTab(tab: string) {
    this.tabSelected.emit(tab);
  }
}
