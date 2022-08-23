import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  forgetform!: FormGroup;
  submitted = false;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(){
    this.forgetform = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
  });
  }



  forget(){
    if(this.forgetform.valid){
      console.log(this.forgetform.value)
    }
    
  }
}
