import { AuthGuard } from './../../guards/authenticationGuard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UsersComponent } from './users/users.component';
import { SettingsComponent } from './settings/settings.component';

const adminRoutes: Routes = [
   { path: 'admin',  component: AdminComponent, children: [
  //  { path: 'admin', canActivate: [AuthGuard], canActivateChild: [AuthGuard], component: AdminComponent, children: [
       { path: 'users', component: UsersComponent },
       { path: 'settings', component: SettingsComponent }
   ] },
   { path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild( adminRoutes )
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AdminRoutingModule { }
