
import {Store} from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages/module';
import { Router } from '@angular/router';

// TODO: Remove the the authentication service
import { AuthenticationService } from '../../../services/authentication.service';
import { RouteInfo } from '../../../models//RouteInfo';

import * as fromApp from '../../../store/app.reducers';
import { reducers } from '../../../store/app.reducers';

declare const $: any;
export const ROUTES: RouteInfo[] = [
  { path: 'keyword-opportunity', title: 'Keword Opportunity' , icon: '',  class: 'fa fa-star' },
  { path: 'seo-audit-tool',      title: 'SEO Audit Tool',      icon: '',  class: '' },
  { path: 'visual-mapping',      title: 'Visual Mapping',      icon: '',  class: '' },
  { path: 'lms',                 title: 'LMS',                 icon: '',  class: '' },
  // todo: set this item with admin guard
  { path: 'admin',               title: 'Admin',               icon: '',  class: '' }
];

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'seo-tls-dbrd-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  isLoggedIn: boolean;
  LoggdedInUser: string;
  showRegister: boolean;

  menuItems: any[];

  constructor( private authService: AuthenticationService,
    private router: Router,
    private _flashMessagesService: FlashMessagesService ) { }

  ngOnInit() {
     this.authService.getAuthentication().subscribe( auth => {

      if ( auth ) {
        this.isLoggedIn = true;
        this.LoggdedInUser = auth.email;

        this.menuItems = ROUTES.filter(menuItem => menuItem);
      } else {
        this.isLoggedIn = false;
      }
    });
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  }

}
