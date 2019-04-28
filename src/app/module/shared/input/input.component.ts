import { Component, OnInit, Input, forwardRef } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {
  @Input("label") label: string;
  @Input("type") type: string;
  @Input("placeholder") placeholder: string;
  @Input("disabled") disabled: boolean;
  @Input("required") required: boolean;

  value: any = "";

  constructor() {}

  writeValue(value: any): void {
    this.value = value ? value : "";
  }
  registerOnChange(fn: any): void {
    // throw new Error("Method not implemented.");
  }
  registerOnTouched(fn: any): void {
    // throw new Error("Method not implemented.");
  }
  setDisabledState?(isDisabled: boolean): void {
    // throw new Error("Method not implemented.");
  }
}
