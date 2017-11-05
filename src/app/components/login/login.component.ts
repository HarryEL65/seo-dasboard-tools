import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages/module';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'seo-tls-dbrd-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private authService: AuthenticationService,
              private router: Router,
              private _flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.login(this.email, this.password)
      .then( (res) => {
        console.log(res);
        // this._flashMessagesService.show('Logged In succeded', {
        //   cssClass: 'alert-success', timeout: 4000
        // });
        this.router.navigate(['/']);
      })
      .catch( (err) => {
        console.log(err.message);
        // this._flashMessagesService.show( err.message, {
        //   cssClass: 'alert-danger', timeout: 4000
        // });
        this.router.navigate(['/login']);
      });

  }

}
