import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CartComponent } from './components/cart/cart.component';
import { FormsModule } from '@angular/forms';
import { AddnewpolicyComponent } from './components/addnewpolicy/addnewpolicy.component';
import { AllPoliciesComponent } from './components/all-policies/all-policies.component';
import { EditpolicyComponent } from './components/editpolicy/editpolicy.component';
import { LoginComponent } from './components/login/login.component';
import { AppStateService } from './appStateService';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { HomeComponent } from './components/home/home.component';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';
import { ApplicationExceptionComponent } from './components/application-exception/application-exception.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { TermsconditionspopupComponent } from './components/termsconditionspopup/termsconditionspopup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CartComponent,
    AddnewpolicyComponent,
    AllPoliciesComponent,
    EditpolicyComponent,
    LoginComponent,
    HomeComponent,    
    ApplicationExceptionComponent, ProfileComponent, TermsconditionspopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    KeycloakAngularModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgbModule
    // AuthModule.forRoot({
    //   config: {
    //     authority: 'http://localhost:8080/auth/realms/Team4_POC',
    //     redirectUrl: window.location.origin,
    //     postLogoutRedirectUri: window.location.origin,
    //     clientId: 'microservices',
    //     scope: 'openid profile email offline_access',
    //     responseType: 'code',
    //     silentRenew: true,
    //     useRefreshToken: true,
    //     logLevel: LogLevel.Debug,
    //   },
    // }),
  ],
  providers: [ AppStateService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080/auth',
        realm: 'Team4_POC',
        clientId: 'POC',
      },
      initOptions: {
        //onLoad: 'login-required',
        //onLoad: 'check-sso',
        checkLoginIframe: false,
      },
      loadUserProfileAtStartUp: true,
    });
}
