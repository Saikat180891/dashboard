import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Content } from "../../shared/accordion/accordion.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  @Input("links") links: Content[];
  @Output("selectedLink") selectedLink = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  // onRouterChange($event: string): void {
  //   this.selectedLink.emit($event)
  //   this.router.navigate(["/home/" + $event]);
  //   console.log($event);
  // }
}
