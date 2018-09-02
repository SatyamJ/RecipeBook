import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  currentTab = 'recipes';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDLO3BtAUnETFbBpEHL0yhPYZKy3IjCsYI',
      authDomain: 'ng-recipe-book-23.firebaseapp.com'
    });
  }

  selectTab(selectedTab: string) {
    this.currentTab = selectedTab;
  }
}
