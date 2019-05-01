import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignOutComponent } from "./sign-out/sign-out.component";
import { AuthWrapperComponent } from "./auth-wrapper/auth-wrapper.component";
import { AuthComponent } from "./auth.component";
import { SharedModule } from "../shared/shared.module";
import { Route, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: AuthComponent
  }
];

@NgModule({
  declarations: [
    AuthComponent,
    SignInComponent,
    SignOutComponent,
    AuthWrapperComponent
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)]
})
export class AuthModule {}
