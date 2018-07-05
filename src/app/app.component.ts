import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  currentTab = 'recipes';

  selectTab(selectedTab: string) {
    this.currentTab = selectedTab;
  }
}
