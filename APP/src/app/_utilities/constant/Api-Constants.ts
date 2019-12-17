import { HttpHeaders } from "@angular/common/http";

export const GlobalVariable = Object.freeze({
  /* Local Environment */
  BASE_API_URL: "http://localhost:8080/"

  /* Development Environment Local */
  // BASE_API_URL: ''

  /* UAT Environment - Server Cloud */
  // BASE_API_URL: ''
});

export const RequestApi = Object.freeze({
  LOGIN: GlobalVariable.BASE_API_URL + "manager/login",
  REGISTER: GlobalVariable.BASE_API_URL + "manager/register",
  GET_EMPLOYEE_LIST: GlobalVariable.BASE_API_URL + "employee/getEmployees",
  GET_EMPLOYEE_BYID: GlobalVariable.BASE_API_URL + "employee/getEmployee/",
  POST_EMPLOYEE_DATA: GlobalVariable.BASE_API_URL + "employee/addEmployee",
  UPDATE_EMPLOYEE_BYID: GlobalVariable.BASE_API_URL + "employee/updateEmployee",
  DELETE_EMPLOYEE_BYID: GlobalVariable.BASE_API_URL + "employee/deleteEmployee/"
});

export const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};
