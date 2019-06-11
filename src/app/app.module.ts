import { LoginRoutingModule } from './login/login-routing.module';
import { Test1Component } from './test1/test1.component';
import { Test1RoutingModule } from './test1/test1-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './register/register.component';
import { RegisterRoutingModule } from './register/register-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Test1RoutingModule,
    LoginRoutingModule,
    RegisterRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
