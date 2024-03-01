import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

import { MasterService } from './services/master.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private ms: MasterService) { }

  myForm: FormGroup;
  genderList = [ {label: "Male", cd: "male"}, {label: "Female", cd: "female"} ];
  customerList: any = [];
  sortOrder: string = 'desc';

  newForm(){
    this.myForm = new FormGroup({
      _id: new FormControl(''),
      empName: new FormControl('', Validators.required),
      empId: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      city: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      date: new FormControl('')
    })
  }

  editReq(_obj: any){
    this.myForm.patchValue(_obj);
  }

  getAllCustomers(){
    this.newForm();
    let list: any = localStorage.getItem('list') || [];
    this.customerList = list.length>0 ? JSON.parse(list) : list;
  }

  formSubmit(){
    this.myForm.value.date = new Date();
    let items = this.customerList;
    if(!this.myForm.value._id){
      this.myForm.value['_id'] = `uniqueId_${items.length+1}`;
      items.push(this.myForm.value);
    }
    else{
      const index = items.findIndex(record => record._id === this.myForm.value._id);
      if (index !== -1) {
        items[index] = this.myForm.value;
      }
    }
    items = JSON.stringify(items);
    localStorage.setItem('list', items);
    this.getAllCustomers();
  }

  ngOnInit(): void {
    // localStorage.clear()
    this.getAllCustomers();
  }
}
