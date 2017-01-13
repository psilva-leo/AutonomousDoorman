import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {TestComponent} from './components/test/test.component';
import {AuthGuard} from "../shared/auth.guard";
import {RegisterComponent} from "./components/register/register.component";
import {VenueDetailComponent} from "./components/venue-detail/venue-detail.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {NewVenueComponent} from "./components/new-venue/new-venue.component";

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard', pathMatch: 'full',
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'new-venue',
        component: NewVenueComponent,
      }
    ],
  },
  {
    canActivate: [AuthGuard],
    path: 'new-venue',
    component: VenueDetailComponent,
  },
  {
    canActivate: [AuthGuard],
    path: 'dashboard/venues',
    children: [
      {
        path: '',
        component: VenueDetailComponent,
      },
      {
        path: ':id',
        component: VenueDetailComponent,
      }
    ]

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
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
