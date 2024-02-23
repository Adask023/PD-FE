import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent implements OnInit {
  isCreator: boolean;
  ngOnInit() {
    const userDataToParse = sessionStorage.getItem('userData');
    if (typeof userDataToParse === 'string') {
      const userData = JSON.parse(userDataToParse);
      this.isCreator = userData.user_type === 'creator';
    }
  }
  handleLogoutAction() {
    sessionStorage.removeItem('userData');
  }
}
