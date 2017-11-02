import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LogoutComponent } from './components/logout/logout.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponentComponent } from './components/page-not-found-component/page-not-found-component.component';

const seoToolsDsbrdRoutes: Routes = [
  { path: '', redirectTo: 'keyword-opportunity', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
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
