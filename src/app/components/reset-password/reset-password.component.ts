import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/User/user-service.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetform: FormGroup;
  submitted = false;
  resetToken: any;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.resetform = this.formBuilder.group({
      newpassword: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.resetToken = this.activeRoute.snapshot.paramMap.get('token');
  }

  reset() {
    if (this.resetform.valid) {
      console.log(this.resetform.value.password)

      let newpass={
        password:this.resetform.value.newpassword
      }

      this.userService.reset(newpass,this.resetToken).subscribe((responce) => {
        console.log(responce);

      }, (error: any) => {
        console.log(error);
      })

    }
  }



}