import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { AccordionModule } from "primeng/accordion";
import { DropdownModule } from "primeng/dropdown";
import { NvD3Module } from "ng2-nvd3";

import { AppComponent } from "./app.component";
import { AuthComponent } from "./module/auth/auth.component";
import { HomeComponent } from "./module/home/home.component";
import { SharedComponent } from "./module/shared/shared.component";
import { SignInComponent } from "./module/auth/sign-in/sign-in.component";
import { SignOutComponent } from "./module/auth/sign-out/sign-out.component";
import { AuthWrapperComponent } from "./module/auth/auth-wrapper/auth-wrapper.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { NavbarComponent } from "./module/home/navbar/navbar.component";
import { SidebarComponent } from "./module/home/sidebar/sidebar.component";
import { SearchBoxComponent } from "./module/shared/search-box/search-box.component";
import { AccordionComponent } from "./module/shared/accordion/accordion.component";
import { ChartComponent } from "./module/shared/chart/chart.component";
import { CardComponent } from "./module/shared/card/card.component";
import { DashboardComponent } from "./module/home/dashboard/dashboard.component";
import { NewCustomerComponent } from "./module/home/new-customer/new-customer.component";
import { ExistingCustomerComponent } from "./module/home/existing-customer/existing-customer.component";
import { DropdownComponent } from "./module/shared/dropdown/dropdown.component";
import "d3";
import "nvd3";
import { InputComponent } from './module/shared/input/input.component';
import { CustomerCardComponent } from './module/home/customer-card/customer-card.component';
const routes: Route[] = [
  {
    path: "",
    component: AuthComponent
  },
  {
    path: "home",
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
  },
  {
    path: "**",
    redirectTo: "/home"
  }
];
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    SharedComponent,
    SignInComponent,
    SignOutComponent,
    AuthWrapperComponent,
    NavbarComponent,
    SidebarComponent,
    SearchBoxComponent,
    AccordionComponent,
    ChartComponent,
    CardComponent,
    DashboardComponent,
    NewCustomerComponent,
    ExistingCustomerComponent,
    DropdownComponent,
    InputComponent,
    CustomerCardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AccordionModule,
    MatCardModule,
    DropdownModule,
    NvD3Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
