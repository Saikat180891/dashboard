import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"]
})
export class SignInComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl("", [Validators.email, Validators.required]),
    password: new FormControl("", [
      Validators.minLength(8),
      Validators.required
    ])
  });

  constructor(public router: Router) {}

  ngOnInit() {}

  onLogin() {
    if (this.loginForm.valid) {
      this.router.navigate(["/home"]);
    }
  }
}
