import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DailogComponent } from '../dailog/dailog.component';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';
import { DarkModeService } from 'angular-dark-mode';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  darkMode$: Observable<boolean> = this.darkModeService.darkMode$;
  constructor(
    private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog,
    public afAuth: AngularFireAuth,
    public router: Router,
    private darkModeService: DarkModeService
  ) {}
  ngOnInit(): void {
  }

  signIn() {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.signInWithPopup(googleAuthProvider);
  }

  signOut() {
    this.afAuth.signOut();
  }

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
    onToggle(): void {
  }

  async openDialog() {
    const user = await this.afAuth.currentUser;
    const isAuthenticated = user ? true : false;

    if (!isAuthenticated) {
      this.router.navigate(['signin']);
    } else {
      this.dialog.open(DailogComponent, {
        width: '100%',
      });
    }
  }


  
}
