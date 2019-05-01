import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AccordionModule } from "primeng/accordion";
import { DropdownModule } from "primeng/dropdown";
import { NvD3Module } from "ng2-nvd3";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { SplitButtonModule } from "primeng/splitbutton";
import { ExportAsModule } from "ngx-export-as";
import { ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { SearchBoxComponent } from "./search-box/search-box.component";
import { AccordionComponent } from "./accordion/accordion.component";
import { ChartComponent } from "./chart/chart.component";
import { CardComponent } from "./card/card.component";
import { DropdownComponent } from "./dropdown/dropdown.component";
import { BrowserModule } from "@angular/platform-browser";
import { InputComponent } from "./input/input.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    SearchBoxComponent,
    AccordionComponent,
    ChartComponent,
    CardComponent,
    DropdownComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCardModule,
    AccordionModule,
    DropdownModule,
    NvD3Module,
    HttpClientModule,
    SplitButtonModule,
    ExportAsModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCardModule,
    SearchBoxComponent,
    AccordionComponent,
    ChartComponent,
    CardComponent,
    DropdownComponent,
    AccordionModule,
    DropdownModule,
    NvD3Module,
    InputComponent,
    HttpClientModule,
    SplitButtonModule,
    ExportAsModule
  ]
})
export class SharedModule {}
