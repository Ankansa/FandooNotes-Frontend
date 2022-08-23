import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { LoginComponent } from './components/login/login.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'forgetpassword',component:ForgetPasswordComponent},
  {path:'resetpassword',component:ResetPasswordComponent},
  {path: 'registration',component:RegistrationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
