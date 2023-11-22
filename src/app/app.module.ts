import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from './Home-page/container/container.component';
import { HeaderComponent } from './Home-page/header/header.component';
import { NavComponent } from './Home-page/nav/nav.component';
import { FooterComponent } from './Home-page/footer/footer.component';

import { FeedbackComponent } from './Home-page/feedback/feedback.component';

import { AppRoutingModule } from './app-routing-module';
import { SignInComponent } from './Home-page/sign-in/sign-in.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Content2Component } from './Home-page/content2/content2.component';
import { Content3Component } from './Home-page/content3/content3.component';
import { Content4Component } from './Home-page/content4/content4.component';
import { Content5Component } from './Home-page/content5/content5.component';
import { Content6Component } from './Home-page/content6/content6.component';
import { ContentFeatureComponent } from './Home-page/content-feature/content-feature.component';
import { ContentFeature2Component } from './Home-page/content-feature2/content-feature2.component';
//Mateiral
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatChipsModule} from '@angular/material/chips';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HomeComponent } from './admin/components/home/home.component';
import { MyshopsComponent } from './admin/components/myshops/myshops.component';
import { DailogComponent } from './admin/components/dailog/dailog.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { DARK_MODE_OPTIONS } from 'angular-dark-mode';
import { MatSortHeader, MatSortModule } from '@angular/material/sort';
import { SortPipe } from './admin/Pipes/sort.pipe';
import {MatExpansionModule} from '@angular/material/expansion';
@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    ContentFeatureComponent,
    ContentFeature2Component,
    FeedbackComponent,
    Content2Component,
    Content3Component,
    Content4Component,
    Content5Component,
    Content6Component,
    SignInComponent,
    AdminComponent,
    HomeComponent,
    AdminComponent,
    MyshopsComponent,
    DashboardComponent,
    DailogComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig, 'angularfs'),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatChipsModule,
    MatDialogModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule,
    MatCardModule,
    MatExpansionModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore())
  ],
  exports: [],
  providers: [
    {
        provide: DARK_MODE_OPTIONS,
        useValue: {
            darkModeClass: 'my-dark-mode',
            lightModeClass: 'my-light-mode'
        }
    }],
  bootstrap: [AppComponent],
})
export class AppModule {}
