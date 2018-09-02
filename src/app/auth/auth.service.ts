import * as firebase from 'firebase';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
  authToken: string;

  constructor(private router: Router) {}

  signin(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        (response) => {
          this.router.navigate(['/']);
          console.log(response);
          firebase.app().auth().currentUser.getIdToken().then(
            (token) => this.authToken = token
          );
        }
      )
      .catch(
        (error) => console.log(error)
      );
  }

  signup(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        (response) => console.log(response)
      )
      .catch(
        (error) => console.log(error)
      );
  }

  getToken() {
    firebase.app().auth().currentUser.getIdToken().then(
      (token) => this.authToken = token
    );
    return this.authToken;
  }

  isAuthenticated() {
    return this.authToken != null;
  }

  logout() {
    firebase.auth().signOut();
    this.authToken = null;
  }
}
