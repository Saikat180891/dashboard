import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { Content } from "./content.model";

@Component({
  selector: "app-accordion",
  templateUrl: "./accordion.component.html",
  styleUrls: ["./accordion.component.scss"]
})
export class AccordionComponent implements OnInit {
  @Input("content") contents: Content[];
  @Output("selectedLink") selectedLink = new EventEmitter<string>();

  constructor(public router: Router) {}

  ngOnInit() {}

  onLinkSelected(event: string): void {
    this.selectedLink.emit(event);
  }
}
