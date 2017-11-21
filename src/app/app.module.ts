
/*=============== Modules ==================*/

/*---------------- Angular and third parties modules -------------------*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
// import { Ng2BreadcrumbModule } from 'ng2-breadcrumb/ng2-breadcrumb';

import { EffectsModule } from '@ngrx/effects';

import { StoreModule, ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

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
import { AuthentificationEffects } from './components/authentication/store/authentication.effects';

// const reducers: ActionReducerMap<IState> = {todos, visibilityFilter};

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: ['isAuthenticated']})(reducer);
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

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
    StoreModule.forRoot(reducers, {metaReducers}),
    // Registering the effects I want to control: here it is
    // the AuthenticationEffects (authentication.effects.ts)
    // ==> we are hooking up the AuthetificationEffects class to
    // to the EffectsModule so that @ngrx will be able to analyze our
    // store and inject our actions into our Effects Classes
    EffectsModule.forRoot([AuthentificationEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    })
  ],
  providers: [AngularFireDatabase, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
