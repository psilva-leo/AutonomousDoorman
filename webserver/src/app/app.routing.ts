import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {TestComponent} from './components/test/test.component';
import {AuthGuard} from "../shared/auth.guard";

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
    path: '#signup',
    component: LoginComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
