import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { AppComponent } from "./app.component";

import "d3";
import "nvd3";
import { SharedModule } from "./module/shared/shared.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ApiService } from "./services/api.service";

const routes: Route[] = [
  {
    path: "",
    loadChildren: "./module/auth/auth.module#AuthModule"
  },
  {
    path: "home",
    loadChildren: "./module/home/home.module#HomeModule"
  },
  {
    path: "**",
    redirectTo: "/home"
  }
];
@NgModule({
  declarations: [AppComponent],
  imports: [
    SharedModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule {}
