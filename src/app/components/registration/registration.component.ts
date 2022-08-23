import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/User/user-service.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationFrom: FormGroup;
  submitted = false;
  input = "password";

  constructor(private formBuilder: FormBuilder, private userService:UserService) { }

  ngOnInit(){
    this.registrationFrom = this.formBuilder.group({
      First_name: ['', Validators.required],
      Second_name: ['', Validators.required],
      mailid: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
  });

}

registration(){
  if(this.registrationFrom.valid){
  console.log(this.registrationFrom.value);
  this.userService.registration(this.registrationFrom.value).subscribe((data)=>{
    console.log(data);
    
  },(error : any)=> {
    console.log(error);
  })
  }

}

showpassword(checker:any)
{
  if(checker.checked){
    this.input="text";
  }
  else{
    this.input="password"
  }
}


}