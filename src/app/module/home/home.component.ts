import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Content } from "../shared/accordion/content.model";
import { LINKS } from "src/app/app-constants";
import { HomeEndpointsService } from "./services/home-endpoints.service";
import { HomeDataService } from "./services/home-data.service";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  links: Content[] = [];

  constructor(
    public router: Router,
    public endpoint: HomeEndpointsService,
    public homeData: HomeDataService
  ) {}

  ngOnInit(): void {
    this.links = LINKS;
    this.getUsers();
    this.getMenu();
  }

  getUsers(): void {
    this.endpoint.getUsers().subscribe(res => {
      this.homeData.setUsers(res);
    });
  }

  getMenu(): void {
    this.endpoint.getMenu().subscribe(res => {
      this.homeData.setMenu(res);
    });
  }

  onRouterChange($event: string): void {
    this.router.navigate(["home/" + $event]);
  }
}
