import { Component, OnInit } from '@angular/core';
import { RouteInfo } from '../../models//RouteInfo';

declare const $: any;
export const ROUTES: RouteInfo[] = [
   { path: 'users',      title: 'Users',      icon: '',  class: '' },
   { path: 'settings',      title: 'Settings',      icon: '',  class: '' }
];

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  adminMenuItems: any[];
  constructor() { }

  ngOnInit() {
    this.adminMenuItems = ROUTES.filter( adminItem => adminItem );
  }

}
