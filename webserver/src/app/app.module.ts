import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Ng2BootstrapModule }           from 'ng2-bootstrap/ng2-bootstrap';
import { ChartsModule }                 from 'ng2-charts/ng2-charts';
import { AppComponent } from './app.component';
import { firebaseConfig } from "../environments/firebase.config";
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { routing } from './app.routing';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import {AuthGuard} from "../shared/auth.guard";
import {FirebaseService} from "./services/firebase.service";
import { TestComponent } from './component/test/test.component';

import { NAV_DROPDOWN_DIRECTIVES }      from '../shared/nav-dropdown.directive';
import { SIDEBAR_TOGGLE_DIRECTIVES }    from '../shared/sidebar.directive';
import { AsideToggleDirective }         from '../shared/aside.directive';
import { BreadcrumbsComponent }         from '../shared/breadcrumb.component';

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password,
};

@NgModule({
  declarations: [
    AppComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
    HomeComponent,
    LoginComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
    routing,
    Ng2BootstrapModule,
    ChartsModule,
  ],
  providers: [AuthGuard, FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
