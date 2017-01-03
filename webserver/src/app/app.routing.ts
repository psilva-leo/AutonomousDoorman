import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {TestComponent} from './components/test/test.component';
import {AuthGuard} from "../shared/auth.guard";
import {RegisterComponent} from "./components/register/register.component";

const appRoutes: Routes = [
  {
    path: '',
    data: {
      title: 'Home'
    },
    canActivate: [AuthGuard],
    component: TestComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'test',
    canActivate: [AuthGuard],
    component: TestComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
