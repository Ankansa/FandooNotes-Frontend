import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/User/user-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationFrom: FormGroup;
  submitted = false;
  input = "password";

  constructor(private formBuilder: FormBuilder, private userService: UserService, private snakbar: MatSnackBar) { }

  ngOnInit() {
    this.registrationFrom = this.formBuilder.group({
      First_name: ['', Validators.required],
      Second_name: ['', Validators.required],
      mailid: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

  }

  registration() {
    console.log("its workin")
    if (this.registrationFrom.valid) {
      console.log(this.registrationFrom.value);



      this.userService.registration(this.registrationFrom.value).subscribe((responce: any) => {
        console.log("All responce is :", responce);

        this.snakbar.open('Registration Sucessfull', 'Ok', {
        });


      }, (error: any) => {
        console.log("The error is: ", error);
        this.snakbar.open(error.error.message, 'Ok', {
        });
      })
    }

  }

  showpassword(checker: any) {
    if (checker.checked) {
      this.input = "text";
    }
    else {
      this.input = "password"
    }
  }




}