import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {StorageDataService} from '../../shared/storage-data.service';
import {Response} from '@angular/http';
import {AuthService} from '../../auth/auth.service';
import {HttpEvent} from "@angular/common/http";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  @Output() tabSelected = new EventEmitter<string>();
  constructor(private storageDataService: StorageDataService, private authService: AuthService) { }

  ngOnInit() {
  }

  onSelectTab(tab: string) {
    this.tabSelected.emit(tab);
  }

  onSave() {
    this.storageDataService.storeData()
      .subscribe(
        (response) => {
          console.log(response);
        }
      );
  }

  onFetch() {
    this.storageDataService.fetchData();
  }

  onLogout() {
    this.authService.logout();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
