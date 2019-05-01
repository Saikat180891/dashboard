import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Content } from "src/app/module/shared/accordion/content.model";

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
}
