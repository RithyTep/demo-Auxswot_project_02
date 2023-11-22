import { Component } from '@angular/core';
import { SignInComponent } from '../sign-in/sign-in.component';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
@Component({
 
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
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
