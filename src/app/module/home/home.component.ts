import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Content } from "../shared/accordion/content.model";
import { LINKS } from "src/app/app-constants";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  links: Content[] = [];

  constructor(public router: Router) {}

  ngOnInit() {
    this.links = LINKS;
  }

  onRouterChange($event: string): void {
    this.router.navigate(["home/" + $event]);
  }
}
