import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { LoginComponent } from './components/login/login.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MixNotesComponentComponent } from './components/mix-notes-component/mix-notes-component.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'forgetpassword', component: ForgetPasswordComponent },
  { path: 'resetpassword', component: ResetPasswordComponent },
  { path: 'registration', component: RegistrationComponent },
  // { path: 'notes', component: MixNotesComponentComponent },
  // { path: 'create', component: CreateNoteComponent }

  {
    path: 'dashboard', component: DashboardComponent,
    children:[
      { path: 'notes', component: MixNotesComponentComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
