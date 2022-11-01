import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnewpolicyComponent } from './components/addnewpolicy/addnewpolicy.component';
import { AllPoliciesComponent } from './components/all-policies/all-policies.component';
import { CartComponent } from './components/cart/cart.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditpolicyComponent } from './components/editpolicy/editpolicy.component';

const routes: Routes = [{
  path: ""
  , component: DashboardComponent
},
{
  path: "dashboardroute",
  component: DashboardComponent
}, 
{
  path: "cartroute",
  component: CartComponent
},
{
  path: "addnewpolicy",
  component: AddnewpolicyComponent
},
{
  path: "editpolicy/:pid",
  component: EditpolicyComponent
},
{
  path: "allpolicies",
  component: AllPoliciesComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
