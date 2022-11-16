import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthGuard } from './adminAuthGuard';
import { AuthGuard } from './authGuard';
import { AddnewpolicyComponent } from './components/addnewpolicy/addnewpolicy.component';
import { AllPoliciesComponent } from './components/all-policies/all-policies.component';
import { ApplicationExceptionComponent } from './components/application-exception/application-exception.component';
import { CartComponent } from './components/cart/cart.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditpolicyComponent } from './components/editpolicy/editpolicy.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { KCAuthGuard } from './custom-keycloak-auth-guard';

const routes: Routes = [
  {
    path: "login", component: LoginComponent
  },
  {
    path: "appexception",
    component: ApplicationExceptionComponent
  },
  {
    path: "",
    component: HomeComponent,
    // UnComment to activate login    
    canActivate: [KCAuthGuard],
    children: [
      {
        path: "profile",
        component: ProfileComponent
      },
      {
        path: "dashboardroute",
        component: DashboardComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "cartroute",
        component: CartComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "addnewpolicy",
        component: AddnewpolicyComponent,
        canActivate: [AdminAuthGuard]
      },
      {
        path: "editpolicy/:pid",
        component: EditpolicyComponent,
        canActivate: [AdminAuthGuard]
      },
      {
        path: "allpolicies",
        component: AllPoliciesComponent,
        data: { roles: ['admin']},
        canActivate: [AdminAuthGuard]
      },
      { path: "**", redirectTo: "", pathMatch: "full" }
    ]
  },
  { path: "**", redirectTo: "login", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
