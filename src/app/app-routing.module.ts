import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { LoginComponent } from './components/login/login.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DisplayNotesComponent } from './components/display-notes/display-notes.component';
import { ArchiveViewComponent } from './components/archive-view/archive-view.component';
import { TrashViewComponent } from './components/trash-view/trash-view.component';



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
      { path: 'notes', component: DisplayNotesComponent },
      {path:'archive', component:ArchiveViewComponent},
      {path:'trash', component:TrashViewComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
