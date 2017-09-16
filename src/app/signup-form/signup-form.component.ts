import { UserNameValidator } from './UserNameValidator';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent  {

  form=new FormGroup({
    username:new FormControl('',[Validators.required,UserNameValidator.cannotContainSpece]),
    password:new FormControl('',Validators.required)
  })
  
  get username(){
    return this.form.get('username');
  }


}
