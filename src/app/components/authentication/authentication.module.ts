/*=============== Modules ==================*/

/*---------------- Angular and third parties modules -------------------*/
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';

/*=================== services ===========================*/
import { AuthenticationService } from '../../services/authentication.service';
// /*=================== guard ===========================*/
import { AuthGuard } from '../../guards/authenticationGuard';
import { SignUpComponent } from '../../components/authentication/sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';


@NgModule({
  declarations: [
    SignUpComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    AuthenticationRoutingModule
  ],
  providers: [
    AuthenticationService,
    AuthGuard
  ]

})
export class AuthenticationModule { }
