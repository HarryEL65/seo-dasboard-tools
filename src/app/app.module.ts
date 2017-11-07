
/*=============== Modules ==================*/

/*---------------- Angular and third parties modules -------------------*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { Ng2BreadcrumbModule } from 'ng2-breadcrumb/ng2-breadcrumb';


/*---------------- angularFirebase -------------------*/
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

 import { FlashMessagesModule } from 'angular2-flash-messages/module';


/*---------------- custom modules -------------------*/
import { AppRoutingModule } from './app-routing.module';
import { KeywordOpportunityModule } from './components/keyword-opportunity/keyword-opportunity.module';
import { SeoAuditToolModule } from './components/seo-audit-tool/seo-audit-tool.module';
import { VisualMappingNetworkModule } from './components/visual-mapping-network/visual-mapping-network.module';
import { LmsModule } from './components/lms/lms.module';

/*---------------- Shared modules -------------------*/
import { SharedModule } from './components/shared/shared.module';

/*================ Components =====================*/

/*---------------- main/startup component -------*/
import { AppComponent } from './app.component';

/*---------------- custom components ------------*/
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentAreaComponent } from './components/content-area/content-area.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { HomeComponent } from './components/home/home.component';
import { BreadcrumbNavComponent } from './components/content-area/breadcrumb-nav/breadcrumb-nav.component';
import { PageNotFoundComponentComponent } from './components/page-not-found-component/page-not-found-component.component';

/*---------------- custom directives -------------------*/
import { DropdownDirective } from './directives/dropdown.directive';

/*===================== pipes ==========================*/

/*================== environment variables ================*/
import { environment } from './../environments/environment';
import { AdminModule } from './components/admin/admin.module';

/*=================== services ===========================*/
import { UsersService } from './services/users.service';
import { AuthenticationService } from './services/authentication.service';

// /*=================== guard ===========================*/
 import { AuthGuard } from './guards/authenticationGuard';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    UserProfileComponent,
    BreadcrumbNavComponent,
    HomeComponent,
    PageNotFoundComponentComponent,
    ContentAreaComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule,
    FlashMessagesModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    KeywordOpportunityModule,
    SeoAuditToolModule,
    VisualMappingNetworkModule,
    LmsModule,
    AdminModule,
    SharedModule,
    Ng2BreadcrumbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase, 'wp-dasboard-app'),
    AngularFireAuthModule
  ],
  providers: [AngularFireDatabase, UsersService, AuthenticationService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
