import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Employee } from "./employee.model";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AppService } from "../app.service";
import { NotifierService } from "angular-notifier";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-emp-modal",
  templateUrl: "./emp-modal.component.html",
  styleUrls: ["./emp-modal.component.scss"]
})
export class EmpModalComponent implements OnInit {
  @Input() public id;
  @Output() clickevent = new EventEmitter<string>();
  title: String;
  empForm: FormGroup;
  submitted = false;
  isUpdate: boolean = false;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private appService: AppService,
    private modalService: NgbModal,
    private notifierService: NotifierService
  ) {}

  ngOnInit() {
    debugger;
    this.title = this.id ? "Update" : "Create";
    this.formInit();
    this.id == "0" ? null : this.getData();
    console.log(this.id);
  }

  formInit() {
    this.empForm = this.formBuilder.group({
      id: [""],
      firstname: ["", Validators.required],
      lastname: ["", Validators.required],
      address: [""],
      city: [""],
      dob: [""],
      email: ["", [Validators.required, Validators.email]],
      mobile: ["", [Validators.minLength(10), Validators.maxLength(10)]]
    });
  }

  getData() {
    this.isUpdate = true;
    this.appService.getEmployee(this.id).subscribe(result => {
      console.log(result);
      let emp = result as Employee;
      this.empForm.patchValue({
        id: this.id,
        firstname: emp.firstname,
        lastname: emp.lastname,
        address: emp.address,
        city: emp.city,
        dob: emp.dob,
        email: emp.email,
        mobile: emp.mobile
      });
    });
  }

  get f() {
    return this.empForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.empForm.invalid) return;
    this.activeModal.close();
    this.isUpdate ? this.onUpdate() : this.onCreate();
  }

  onUpdate() {
    this.appService.updateEmployee(this.empForm.value).subscribe(result => {
      console.log(result);
      this.notifierService.notify("success", result);
      this.clickevent.emit(result);
    });
  }

  onCreate() {
    this.appService.createEmployee(this.empForm.value).subscribe(result => {
      console.log(result);
      this.notifierService.notify("success", result);
      this.clickevent.emit(result);
    });
  }

  onReset() {
    this.submitted = false;
    this.empForm.reset();
  }
}
