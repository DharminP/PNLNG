import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isAdmin: boolean = false;

  constructor(
    private keycloakService : KeycloakService
  ) { }

  ngOnInit(): void {
    this.isAdmin = this.keycloakService.isUserInRole("admin") ? true : false;
  }

  onLogout() {
    this.keycloakService.logout('http://localhost:4200');
  }
}
