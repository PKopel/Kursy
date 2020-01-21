import {Injectable} from '@angular/core';
import {UserService} from './user.service';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  users: Array<User>;

  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  hasRole(role: string, uid: string): boolean {
    let result = false;
    this.users.forEach(user => {
      if (user.uid === uid) {
        result = user.roles.hasOwnProperty(role);
      }
    });
    return result;
  }

  hasCourse(course: string, uid: string): boolean {
    let result = false;
    this.users.forEach(user => {
      if (user.uid === uid && user.courses) {
        user.courses.forEach(c => {
          if (c.name === course) {
            result = true;
          }
        });
      }
    });
    return result;
  }

  hasNotRatedCourse(course: string, uid: string): boolean {
    let result = false;
    this.users.forEach(user => {
      if (user.uid === uid && user.courses) {
        user.courses.forEach(c => {
          if (c.name === course && !c.rated) {
            result = true;
          }
        });
      }
    });
    return result;
  }

  getUser(uid: string): User {
    let user: User = null;
    this.users.forEach(u => {
      if (u.uid === uid) {
        user = u;
      }
    });
    return user;
  }
}
