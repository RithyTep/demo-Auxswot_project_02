import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ContentFeatureComponent } from './content-feature/content-feature.component';
import { ContentFeature2Component } from './content-feature2/content-feature2.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { Content2Component } from './content2/content2.component';
import { Content3Component } from './content3/content3.component';
import { Content4Component } from './content4/content4.component';
import { Content5Component } from './content5/content5.component';

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
    Content5Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
