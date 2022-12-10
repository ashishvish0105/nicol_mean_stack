import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleLoginProvider, SocialLoginModule } from 'angularx-social-login';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { SharedModule } from './shared/shared.module';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    SocialLoginModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: true,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('781768205938-80e8org9csb0pnhk7cnbcub9gnoi646u.apps.googleusercontent.com')
        }
      ]
    }
  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
