import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/User/user-service.service';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  forgetform: FormGroup;
  submitted = false;


  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.forgetform = this.formBuilder.group({
      mailid: ['', [Validators.required, Validators.email]]
    });
  }



  forget() {
    if (this.forgetform.valid) {
      console.log(this.forgetform.value)
      this.userService.forget(this.forgetform.value).subscribe((data) => {
        console.log(data);
      })
    }

  }
}
