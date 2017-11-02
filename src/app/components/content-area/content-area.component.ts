import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../services/authentication.service';
import { BreadcrumbService } from 'ng2-breadcrumb/app/components/breadcrumbService';
import { BreadcrumbNavComponent } from '../content-area/breadcrumb-nav/breadcrumb-nav.component';
// import { BreadcrumbNavComponent}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'content-area',
  templateUrl: './content-area.component.html',
  styleUrls: ['./content-area.component.css']
})
export class ContentAreaComponent implements OnInit {
  isLoggedIn: boolean;
  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.authService.getAuthentication().subscribe( auth => {
      auth ? this.isLoggedIn = true : this.isLoggedIn = false;
    });
  }

}
