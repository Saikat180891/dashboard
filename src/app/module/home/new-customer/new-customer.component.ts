import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { FooterColumnGroup } from "primeng/components/common/shared";

@Component({
  selector: "app-new-customer",
  templateUrl: "./new-customer.component.html",
  styleUrls: ["./new-customer.component.scss"]
})
export class NewCustomerComponent implements OnInit {
  form = new FormGroup({
    firstname: new FormControl("", [Validators.required]),
    lastname: new FormControl(""),
    age: new FormControl(""),
    pan: new FormControl("", [Validators.required]),
    aadhar: new FormControl("", [Validators.required]),
    contact: new FormGroup({
      primaryMobile: new FormControl("", Validators.required),
      alternateMobile: new FormControl(""),
      email: new FormControl("", [Validators.email, Validators.required]),
      alternateEmail: new FormControl("", [Validators.email])
    }),
    address: new FormGroup({
      street1: new FormControl("", [Validators.required]),
      street2: new FormControl(""),
      city: new FormControl("", Validators.required),
      state: new FormControl("", Validators.required),
      pinCode: new FormControl("", Validators.required),
      country: new FormControl("India", Validators.required)
    }),
    business: new FormGroup({
      organizationName: new FormControl("", [Validators.required]),
      license: new FormControl("", [Validators.required]),
      gst: new FormControl("", [Validators.required]),
      organizationAddress: new FormControl("", [Validators.required]),
      city: new FormControl("", Validators.required),
      state: new FormControl("", Validators.required),
      pinCode: new FormControl("", Validators.required),
      country: new FormControl("India", Validators.required)
    })
  });
  constructor() {}

  ngOnInit() {}

  onCancel() {
    this.form.reset();
  }
}
