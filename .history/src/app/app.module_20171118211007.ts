
/*=============== Modules ==================*/

/*---------------- Angular and third parties modules -------------------*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
// import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
// import { Ng2BreadcrumbModule } from 'ng2-breadcrumb/ng2-breadcrumb';
import { StoreModule } from '@ngrx/store';
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';


/*---------------- angularFirebase -------------------*/
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { FlashMessagesModule } from 'angular2-flash-messages/module';


/*---------------- custom modules -------------------*/
import { CoreModule } from './components/core/core.module';

import { AuthenticationModule } from './components/authentication/authentication.module';
import { AppRoutingModule } from './app-routing.module';

/*====================== Lazy Loading Modules ==> Handled in app-routing.module ===============================
// import { AdminModule } from './components/admin/admin.module';
// import { KeywordOpportunityModule } from './components/keyword-opportunity/keyword-opportunity.module';
// import { SeoAuditToolModule } from './components/seo-audit-tool/seo-audit-tool.module';
// import { VisualMappingNetworkModule } from './components/visual-mapping-network/visual-mapping-network.module';
// import { LmsModule } from './components/lms/lms.module';
=================================================================================================================*/

/*---------------- Shared modules -------------------*/
import { SharedModule } from './components/shared/shared.module';

/*================ Components =====================*/

/*---------------- main/startup component -------*/
import { AppComponent } from './app.component';

/*---------------- custom components ------------*/
import { LoginComponent } from './components/authentication/login/login.component';


/*---------------- custom directives -------------------*/
import { DropdownDirective } from './directives/dropdown.directive';

/*===================== pipes ==========================*/

/*================== environment variables ================*/
import { environment } from './../environments/environment';

/*=================== services ===========================*/
import { UsersService } from './services/users.service';

/*------------------ reducers -----------------------------*/
import { authenticationReducer } from './components/authentication/store/authentication.reducers';

import { reducers } from './store/app.reducers';


@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,
    FlashMessagesModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    AuthenticationModule,
    /*===lazy loading modules
    //implemented in app.routing.module ===
    // KeywordOpportunityModule,n
    // SeoAuditToolModule,
    // VisualMappingNetworkModule,
    // LmsModule,
    // AdminModule,
    ===========================*/
    SharedModule,
    // Ng2BreadcrumbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase, 'wp-dasboard-app'),
    AngularFireAuthModule,
    StoreDevtoolsModule.instrument(),
    CoreModule,
    /* registering the StoreModule */
    // StoreModule.forRoot(reducers),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot()
    StoreDevtoolsModule.instrument({
      maxAge: 5
    })
  ],
  providers: [AngularFireDatabase, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
