import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../../app-routing.module';
import { Ng2BreadcrumbModule } from 'ng2-breadcrumb/ng2-breadcrumb';

import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ContentAreaComponent } from './content-area/content-area.component';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { BreadcrumbNavComponent } from './content-area/breadcrumb-nav/breadcrumb-nav.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';



import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HeaderComponent,
    SideBarComponent,
    UserProfileComponent,
    BreadcrumbNavComponent,
    PageNotFoundComponentComponent,
    ContentAreaComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    AppRoutingModule,
    Ng2BreadcrumbModule.forRoot()
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent,
    SideBarComponent,
    ContentAreaComponent,
    FooterComponent
    // PageNotFoundComponentComponent
  ]
})
export class CoreModule {}
