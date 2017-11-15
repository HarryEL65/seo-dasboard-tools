import { AuthenticationService } from './services/authentication.service';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './components/authentication/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponentComponent } from './components/page-not-found-component/page-not-found-component.component';

const seoToolsDsbrdRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'not-found', component: PageNotFoundComponentComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(seoToolsDsbrdRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
