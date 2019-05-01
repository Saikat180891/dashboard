import { Component, OnInit } from "@angular/core";
import { HomeDataService } from "../../services/home-data.service";
import { User } from "../../models/users.model";
import { MenuItem } from "primeng/components/common/menuitem";
import { downloadFileAsCSV } from "../../helpers/file.helper";
import { ExportAsService, ExportAsConfig } from "ngx-export-as";

@Component({
  selector: "app-customer-card",
  templateUrl: "./customer-card.component.html",
  styleUrls: ["./customer-card.component.scss"]
})
export class CustomerCardComponent implements OnInit {
  users: User[] = [];
  items: MenuItem[];

  constructor(
    public homeData: HomeDataService,
    private exportAsService: ExportAsService
  ) {}

  ngOnInit() {
    this.homeData.getUsers().subscribe(users => (this.users = users));
  }

  saveFileAsCSV(): void {
    downloadFileAsCSV(this.users, "users");
  }

  saveFileAsPDF(): void {
    const exportAsConfig: ExportAsConfig = {
      type: "pdf", // the type you want to download
      elementId: "table", // the id of html/table element,
      options: {
        orientation: "portrait",
        margins: {
          top: "20",
          left: "20",
          right: "20"
        }
      }
    };
    // download the file using old school javascript method
    this.exportAsService.save(exportAsConfig, "My File Name");
  }
}
