import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthenticationService} from './user/authentication.service';
import {map} from 'rxjs/operators';
import {AuthorizationService} from './user/authorization.service';

@Injectable({
  providedIn: 'root'
})
export class CourseGuard implements CanActivate {

  constructor(
    private authenticationService: AuthenticationService,
    private authorizationService: AuthorizationService,
    private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authenticationService.userData.pipe(map(authState => {
      if (authState !== null) {
        return this.authorizationService.hasRole('admin', authState.uid);
      }
      this.router.navigate(['login']);
      return false;
    }));
  }
}
