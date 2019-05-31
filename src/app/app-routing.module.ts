import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserTableComponent} from './user-table/user-table.component';
import {Routes, RouterModule} from '@angular/router';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {NgLoginGoogleComponent} from './ng-login-google/ng-login-google.component';
import {LoginErrorComponent} from './login-error/login-error.component';

const routes: Routes = [
  { path: '', redirectTo: '/loginPage', pathMatch: 'full' },
  { path: 'loginPage', component: NgLoginGoogleComponent},
  { path: 'LoginError', component: LoginErrorComponent},
  { path: 'usersTable', component: UserTableComponent},
  { path: 'usersDetail/:id', component: UserDetailComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
