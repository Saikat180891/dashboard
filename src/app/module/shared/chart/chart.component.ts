import { Component, OnInit } from "@angular/core";
import { discretebarChart, data } from "./chart-settings";
declare let d3: any;
@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: [
    "./chart.component.scss",
    "../../../../../node_modules/nvd3/build/nv.d3.css"
  ]
})
export class ChartComponent implements OnInit {
  data;
  option;
  constructor() {
    this.data = data;
    this.option = discretebarChart;
  }

  ngOnInit() {}
}
