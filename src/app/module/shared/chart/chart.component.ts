import { Component, OnInit } from "@angular/core";
import { discretebarChartOptions, data, generateData } from "./chart-settings";
import { BehaviorSubject, Observable } from "rxjs";
declare let d3: any;

@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.scss"]
})
export class ChartComponent implements OnInit {
  options: any = {
    chart: {}
  };
  data: any = data;
  dataObserver = new BehaviorSubject<any>(data);
  ngOnInit(): void {
    this.initialize();
  }

  initialize(): void {
    this.options = discretebarChartOptions;
    setInterval(() => {
      this.setChartData(generateData());
      this.getData().subscribe(data => {
        this.data = data;
      });
    }, 5000);
  }

  getData(): Observable<any> {
    return this.dataObserver.asObservable();
  }

  setChartData(chartData: any): void {
    this.dataObserver.next(chartData);
  }
}
