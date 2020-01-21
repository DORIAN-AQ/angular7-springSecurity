import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitiesComponent } from './components/cities/cities.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';

import { AuthGaurdService } from './shared/authGuard/auth-guard.service'

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [ AuthGaurdService ] },
  { path: 'cities', component: CitiesComponent, canActivate: [ AuthGaurdService ] },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
