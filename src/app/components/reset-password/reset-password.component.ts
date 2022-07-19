import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetform: FormGroup;
  submitted = false; 

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(){this.resetform = this.formBuilder.group({
    newpassword: ['', [Validators.required, Validators.minLength(6)]]
});
}

reset(){
  if(this.resetform.valid){
    console.log(this.resetform.value)
  }
  
}
}
