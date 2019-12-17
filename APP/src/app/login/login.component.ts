import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AppService } from "../app.service";
import { NotifierService } from "angular-notifier";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private appService: AppService,
    private notifierService: NotifierService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.appService
      .login(this.f.username.value, this.f.password.value)
      .subscribe(
        result => {
          console.log(result);
          if (result === "true") {
            localStorage.setItem("loginUser", this.f.username.value);
            this.router.navigate(["/view"]);
            this.notifierService.notify("success", "User login successfully.");
          } else {
            this.notifierService.notify(
              "error",
              "Username or password is wrong."
            );
          }
        },
        error => {
          this.notifierService.notify("error", "Something went wrong.");
        }
      );
  }
}
