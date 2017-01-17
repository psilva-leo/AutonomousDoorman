import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ModalModule } from 'angular2-modal';
import {TranslateModule} from 'ng2-translate';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { Ng2BootstrapModule }           from 'ng2-bootstrap/ng2-bootstrap';
import { ChartsModule }                 from 'ng2-charts/ng2-charts';
import { AppComponent } from './app.component';
import { firebaseConfig } from "../environments/firebase.config";
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { routing } from './app.routing';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import {AuthGuard} from "../shared/auth.guard";
import {FirebaseService} from "./services/firebase.service";
import { TestComponent } from './components/test/test.component';

import { NAV_DROPDOWN_DIRECTIVES }      from '../shared/nav-dropdown.directive';
import { SIDEBAR_TOGGLE_DIRECTIVES }    from '../shared/sidebar.directive';
import { AsideToggleDirective }         from '../shared/aside.directive';
import { BreadcrumbsComponent }         from '../shared/breadcrumb.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { AsidemenuComponent } from './components/layout/asidemenu/asidemenu.component';
import { BreadcrumbComponent } from './components/layout/breadcrumb/breadcrumb.component';
import { RegisterComponent } from './components/register/register.component';
import { VenueDetailComponent } from './components/venue-detail/venue-detail.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {StatisticsService} from "./services/statistics.service";
import { NewVenueComponent } from './components/new-venue/new-venue.component';
import { AddUserModalComponent } from './components/add-user-modal/add-user-modal.component';
import { CreateUserModalComponent } from './components/create-user-modal/create-user-modal.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

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
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AsidemenuComponent,
    BreadcrumbComponent,
    RegisterComponent,
    VenueDetailComponent,
    NotFoundComponent,
    NewVenueComponent,
    AddUserModalComponent,
    CreateUserModalComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
    routing,
    Ng2BootstrapModule,
    ChartsModule,
    ModalModule.forRoot(),
    TranslateModule.forRoot(),
    BootstrapModalModule,
  ],
  providers: [AuthGuard, FirebaseService, StatisticsService],
  bootstrap: [AppComponent],
  entryComponents: [ AddUserModalComponent, CreateUserModalComponent ],
})
export class AppModule { }
