import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AppService } from "../app.service";
import { NotifierService } from "angular-notifier";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private appService: AppService,
    private notifierService: NotifierService
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstname: ["", Validators.required],
      lastname: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      address: ["", Validators.required],
      company: ["", Validators.required],
      dob: [""]
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.appService.register(this.registerForm.value).subscribe(
      result => {
        if (result === "true") {
          this.notifierService.notify("success", "Registration successful");
          this.router.navigate(["/login"]);
        } else {
          this.notifierService.notify("error", "Email is already register.");
        }
      },
      error => {
        this.notifierService.notify("error", "Something went wrong.");
      }
    );
  }
}
