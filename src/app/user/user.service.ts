import {Injectable} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) {
  }

  getUsers(): Observable<Array<User>> {
    return this.db.list<User>('users').valueChanges();
  }

  addUser(user: User, uid: string): void {
    this.db.list('users').set(String(uid), user);
  }

  removeUsere(uid: string): void {
    this.db.object('users/' + uid).remove();
  }

  updateUser(user: User, uid: string): void {
    this.db.object('users/' + uid).update(user);
  }
}
