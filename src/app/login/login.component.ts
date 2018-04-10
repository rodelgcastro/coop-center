import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "../_services/auth.service";
import { User } from "../_models/user.model";

import { FormControl, FormGroupDirective, NgForm, Validators } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";

export class LoginErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  moduleId: module.id,
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  user: User;
  loading = false;
  error = "";

  usernameControl = new FormControl("", [Validators.required]);
  passwordControl = new FormControl("", [Validators.required]);
  matcher = new LoginErrorStateMatcher();

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    // reset login status    
    this.authenticationService.logout();
    this.user = new User();
  }

  login() {
    console.log(this.user.username);
    console.log(this.user.password);
    
    this.loading = true;
    this.authenticationService
      .authenticate(this.user.username, this.user.password)
      .subscribe(result => {
        if (result === true) {
          this.router.navigate(["/"]);
        } else {
          this.error = "Username or password is incorrect";
          this.loading = false;
        }
      });
  }
}
