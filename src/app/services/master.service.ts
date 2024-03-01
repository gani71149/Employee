import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor() { }
  customerList: any = [
    {empName: "Ram", empId: "1233", city: "Hyderabad", gender: "Female"},
    {empName: "Laxman", empId: "534543", city: "Vijayawada", gender: "Male"}
  ]

  getAllCustomers(){
    return this.customerList;
  }

}
