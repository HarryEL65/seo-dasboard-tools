import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'ng2-breadcrumb/app/components/breadcrumbService';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'seo-tls-dbrd-breadcrumb-nav',
  templateUrl: './breadcrumb-nav.component.html',
  styleUrls: ['./breadcrumb-nav.component.css']
})
export class BreadcrumbNavComponent implements OnInit {

  constructor(private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
  }

}
