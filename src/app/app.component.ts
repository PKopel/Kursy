import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from './user/authentication.service';
import {User} from 'firebase';
import {AuthorizationService} from './user/authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kursy';
  isNavCollapsed = true;
  currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    public authorizationService: AuthorizationService
  ) {
    authenticationService.userData.subscribe(data => this.currentUser = data);
  }

  logout() {
    this.authenticationService.logOut();
  }
}
