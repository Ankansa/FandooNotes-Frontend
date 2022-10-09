import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/User/user-service.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router:Router, private snakber : MatSnackBar) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      mailid: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  login() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.userService.login(this.loginForm.value).subscribe((responce:any) => {
        console.log("Data after subscribe",responce);
        
        localStorage.setItem('token', responce.data);
        this.router.navigateByUrl('/dashboard/notes');

        this.snakber.open("Login Sucessfull","ok",{duration: 4000,

        })

      }, (error: any) => {
        console.log(error);

      })
    } else {
      console.log("Form is invalid");

    }
  }


}
