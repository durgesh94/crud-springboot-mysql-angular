import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";
import { NotifierService } from "angular-notifier";
import { ApiResponse } from "../_utilities//constant/Api-Response";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Employee } from "../emp-modal/employee.model";
import { EmpModalComponent } from "../emp-modal/emp-modal.component";

@Component({
  selector: "app-view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.scss"]
})
export class ViewComponent implements OnInit {
  public empList: any;
  user: any;
  constructor(
    private appService: AppService,
    private notifierService: NotifierService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.user = localStorage.getItem("loginUser");
    this.getData();
  }

  getData() {
    this.appService.getEmployeeList().subscribe(result => {
      if (result) {
        this.empList = result;
      }
    });
  }

  open(id: any) {
    console.log(id);
    const modalRef = this.modalService.open(EmpModalComponent);
    modalRef.componentInstance.id = id;
    modalRef.componentInstance.clickevent.subscribe($e => {
      console.log($e);
      this.getData();
    });
  }

  onDelete(id) {
    this.appService.deleteEmployee(id).subscribe(result => {
      console.log(result);
      this.getData();
      this.notifierService.notify("success", result);
    });
  }
}
