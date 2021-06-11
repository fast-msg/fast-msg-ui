import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ConfirmAccountComponent } from './components/confirm-account/confirm-account.component';
import { MaterialAngularModule } from '../shared-modules/material-angular/material-angular.module';
import { ContactComponent } from './components/contact/contact.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlertService } from '../services/alert/alert.service';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { PublicService } from './services/public/public.service';
import { LandingPageComponent } from './components/landing-page/landing-page.component';


@NgModule({
  declarations: [
    LoginComponent, 
    LandingPageComponent, 
    RegisterComponent, 
    ResetPasswordComponent, 
    ConfirmAccountComponent, 
    ContactComponent, 
    MainPageComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialAngularModule
  ],
  providers:[PublicService,AlertService,
    {provide: MAT_DATE_LOCALE, useValue: 'es-ES'}]
})
export class PublicModule { }
