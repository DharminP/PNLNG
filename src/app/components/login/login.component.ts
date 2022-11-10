import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
//import { OidcSecurityService } from 'angular-auth-oidc-client';
import { AppStateService } from 'src/app/appStateService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
    private appStateService: AppStateService,
    private keycloakService: KeycloakService
    //public oidcSecurityService: OidcSecurityService
  ) { }

  ngOnInit(): void {
    var isloggedin = this.keycloakService.isLoggedIn();
    // this.oidcSecurityService.checkAuth().subscribe(({ isAuthenticated, userData, accessToken, idToken }) => {
    //   /*...*/
    // });
  }

  onLogin() {
    //this.oidcSecurityService.authorize();
    this.router.navigate(['/profile']);
  }

  identityLogin(loginType: any) {
    this.appStateService.idpHint = loginType;
    this.router.navigate(['/profile'], { queryParams: { loginType: loginType } });
  }
}
