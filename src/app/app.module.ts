import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CartComponent,
    AddnewpolicyComponent,
    AllPoliciesComponent,
    EditpolicyComponent,    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
