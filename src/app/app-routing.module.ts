import { LoginComponent } from './login/login.component';
import { Test1Component } from './test1/test1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'aka',
    // canActivate: [AuthGuardService],
    children: [

      { path: 'test1', component: Test1Component },
      { path: 'login', component: LoginComponent },
     {path: 'register', component: RegisterComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
