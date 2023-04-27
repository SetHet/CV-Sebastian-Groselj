import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvSummaryComponent } from './components/cv-summary/cv-summary.component';
import { GuideAngularComponent } from './components/guide-angular/guide-angular.component';
import { AreaCardComponent } from './components/areas/area-card/area-card.component';
import { AreaInfoComponent } from './components/areas/area-info/area-info.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    CvSummaryComponent,
    GuideAngularComponent,
    AreaCardComponent,
    AreaInfoComponent,
    ContactComponent,
    FooterComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
