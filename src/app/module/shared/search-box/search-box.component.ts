import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-search-box",
  templateUrl: "./search-box.component.html",
  styleUrls: ["./search-box.component.scss"]
})
export class SearchBoxComponent implements OnInit {
  @Input("placeholder") placeholder: string;

  constructor() {}

  ngOnInit() {}

  onSearch(event: any) {
    console.log(event);
  }
}
