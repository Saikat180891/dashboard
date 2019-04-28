import { Component, OnInit } from "@angular/core";
import { Content } from "../shared/accordion/accordion.component";
import { Router } from "@angular/router";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  links: Content[] = [
    {
      heading: "Stats",
      subHeading: [
        {
          label: "Dashboard",
          route: "dashboard"
        }
      ]
    },
    {
      heading: "Customers",
      subHeading: [
        {
          label: "New Customers",
          route: "newcoustomer"
        },
        {
          label: "Existing Customer",
          route: "existingcustomer"
        }
      ]
    },
    {
      heading: "Orders",
      subHeading: [
        {
          label: "Pending",
          route: "pending"
        },
        {
          label: "Delivered",
          route: "delivered"
        },
        {
          label: "In Progress",
          route: "inprocess"
        }
      ]
    },
    {
      heading: "Sales",
      subHeading: [
        {
          label: "Sales",
          route: "sales"
        }
      ]
    },
    {
      heading: "Inventory",
      subHeading: []
    }
  ];

  constructor(public router: Router) {}

  ngOnInit() {}

  onRouterChange($event: string): void {
    this.router.navigate(["home/" + $event]);
  }
}
