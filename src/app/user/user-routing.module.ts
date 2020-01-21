import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignInComponent} from './sign-in/sign-in.component';
import {LogInComponent} from './log-in/log-in.component';

const userRoutes: Routes = [
  {
    path: 'login',
    component: LogInComponent
  },
  {
    path: 'signin',
    component: SignInComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
