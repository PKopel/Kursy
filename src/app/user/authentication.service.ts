import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {User} from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public userData: Observable<User>;

  constructor(
    private router: Router,
    public auth: AngularFireAuth) {
    this.userData = auth.authState;
  }

  signIn(email: string, password: string): Promise<firebase.auth.UserCredential | void> {
    return this.auth.auth.createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        window.alert(error.message);
      });
  }

  async logIn(email: string, password: string, returnUrl: string): Promise<void> {
    try {
      const result = await this.auth.auth.signInWithEmailAndPassword(email, password);
      localStorage.setItem('user', JSON.stringify(result));
      this.router.navigate([returnUrl]);
    } catch (error) {
      window.alert(error.message);
    }
  }

  async logOut(): Promise<void> {
    await this.auth.auth.signOut();
    localStorage.removeItem('user');
  }
}
