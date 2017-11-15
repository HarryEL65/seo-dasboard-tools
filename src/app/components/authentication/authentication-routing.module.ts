import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const authenticationRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(authenticationRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
