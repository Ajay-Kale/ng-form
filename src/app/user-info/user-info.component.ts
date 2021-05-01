import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  title = 'my-first-project';
  isTenant= false;
  listData: any;
  

  constructor(private formBuilder:FormBuilder){ 
    this.listData=[];
  }

  profileForm = this.formBuilder.group({
    selectWing:[''],
    flatNo:[''],
    firstName:[''],
    lastName:[''],
    emailId:[''],
    contactNo:[''],
    alternateNo:[''],
    flatType:[''],
    liveinSociety:[''],
    verificationStatus:[''],
    address:[''],
    regisAggrement:[''],
    startingDate:[''],
    endingDate:['']
  });
  saveForm(){
    console.log('form data is', this.profileForm.value);
    this.listData.push(this.profileForm.value);
  }
  removeItem(element: any) {
    this.listData.forEach((value: any,index: any)=>{
      if(value == element)
      this.listData.splice(index,1)
    })
  }

  ngOnInit(): void {
  }

  onFoodChange(event:any): void {
    if(event.value=='owner'){ 
      this.isTenant = false;
    }else{
      this.isTenant = true;
    }
console.log(event.value);
  }

  // onFloodChange(event:any): void { 
  // console.log(event.value);
  // }

}
