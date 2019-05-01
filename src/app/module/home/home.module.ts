import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";

import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { NewCustomerComponent } from "./components/new-customer/new-customer.component";
import { ExistingCustomerComponent } from "./components/existing-customer/existing-customer.component";
import { CustomerCardComponent } from "./components/customer-card/customer-card.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      {
        path: "",
        component: DashboardComponent
      },
      {
        path: "dashboard",
        component: DashboardComponent
      },
      {
        path: "newcoustomer",
        component: NewCustomerComponent
      },
      {
        path: "existingcustomer",
        component: ExistingCustomerComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    NewCustomerComponent,
    ExistingCustomerComponent,
    CustomerCardComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class HomeModule {}
