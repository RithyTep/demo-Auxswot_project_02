import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  userData!: Observable<any>;
  uid: any;

  constructor(
    private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog,
    public router: Router,
    public afAuth: AngularFireAuth
  ) {}

  loginWithGoogle() {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.signInWithPopup(googleAuthProvider);
  }

  logout() {
    return this.afAuth.signOut();
  }

  get loggedIn(): boolean {
    return !!this.afAuth.currentUser;
  }
}
