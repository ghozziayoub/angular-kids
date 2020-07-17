import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { KindergartenComponent } from './kindergarten/kindergarten.component';
import { EventsComponent } from './events/events.component';
import { AboutEventComponent } from './about-event/about-event.component';
import { Page404Component } from './page404/page404.component';
import { RegisterComponent } from './register/register.component';
import { GestionJardinsComponent } from './gestion-jardins/gestion-jardins.component';
import { GestionClubComponent } from './gestion-club/gestion-club.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'kindergarten', component: KindergartenComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'gestion-jardin', component: GestionJardinsComponent },
  { path: 'gestion-club', component: GestionClubComponent },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
