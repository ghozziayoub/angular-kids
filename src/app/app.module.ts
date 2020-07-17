import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { TopbarComponent } from './topbar/topbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomeKindergartenComponent } from './home-kindergarten/home-kindergarten.component';
import { HomeGalleryComponent } from './home-gallery/home-gallery.component';
import { HomeEventsComponent } from './home-events/home-events.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { KindergartenComponent } from './kindergarten/kindergarten.component';
import { SingleKindergartenComponent } from './single-kindergarten/single-kindergarten.component';
import { EventsComponent } from './events/events.component';
import { SingleEventsComponent } from './single-events/single-events.component';
import { AboutEventComponent } from './about-event/about-event.component';
import { AddKindergartenComponent } from './add-kindergarten/add-kindergarten.component';
import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';
import { RegisterComponent } from './register/register.component';

import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { GestionJardinsComponent } from './gestion-jardins/gestion-jardins.component';
import { GestionClubComponent } from './gestion-club/gestion-club.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    TopbarComponent,
    NavbarComponent,
    BannerComponent,
    HomeBannerComponent,
    HomeKindergartenComponent,
    HomeGalleryComponent,
    HomeEventsComponent,
    FooterComponent,
    AboutUsComponent,
    KindergartenComponent,
    SingleKindergartenComponent,
    EventsComponent,
    SingleEventsComponent,
    AboutEventComponent,
    AddKindergartenComponent,
    LoginComponent,
    Page404Component,
    RegisterComponent,
    GestionJardinsComponent,
    GestionClubComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
