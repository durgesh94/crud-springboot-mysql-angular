import { Injectable } from "@angular/core";
import { RequestApi, httpOptions } from "./_utilities/constant/Api-Constants";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AppService {
  constructor(private http: HttpClient) {}

  getEmployeeList() {
    return this.http.get(RequestApi.GET_EMPLOYEE_LIST, httpOptions);
  }

  getEmployee(id: any) {
    return this.http.get(RequestApi.GET_EMPLOYEE_BYID + id, httpOptions);
  }

  createEmployee(data: any) {
    return this.http.post(RequestApi.POST_EMPLOYEE_DATA, data, {
      responseType: "text"
    });
  }

  updateEmployee(data: any) {
    return this.http.put(RequestApi.UPDATE_EMPLOYEE_BYID, data, {
      responseType: "text"
    });
  }

  deleteEmployee(id: any) {
    return this.http.delete(RequestApi.DELETE_EMPLOYEE_BYID + id, {
      responseType: "text"
    });
  }

  login(username: string, password: string) {
    return this.http.get(RequestApi.LOGIN + "/" + username + "/" + password, {
      responseType: "text"
    });
  }

  register(data: any) {
    return this.http.post(RequestApi.REGISTER, data, { responseType: "text" });
  }
}
