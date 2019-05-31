import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserTableComponent } from './user-table/user-table.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { NgLoginGoogleComponent } from './ng-login-google/ng-login-google.component';
import { LoginErrorComponent } from './login-error/login-error.component';


@NgModule({
  declarations: [
    AppComponent,
    UserTableComponent,
    UserDetailComponent,
    NgLoginGoogleComponent,
    LoginErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
