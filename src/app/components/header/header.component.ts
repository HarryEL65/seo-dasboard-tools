import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages/module';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../services/authentication.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'seo-tls-dbrd-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean;
  loggdedInUser: string;
  showRegister: boolean;

  constructor( private authService: AuthenticationService,
    private router: Router,
    private _flashMessagesService: FlashMessagesService ) { }

  ngOnInit() {
    this.authService.getAuthentication().subscribe( auth => {
      if ( auth ) {
        this.isLoggedIn = true;
        this.loggdedInUser = auth.email;
      } else {
        this.isLoggedIn = false;
      }
    });
  }

  onLogout() {
    this.authService.logout();

    // this._flashMessagesService.show('you are logged out', {
    //   cssClass: 'alert-success', timeout: 4000
    // });
    this.router.navigate(['/login']);
  }


}
