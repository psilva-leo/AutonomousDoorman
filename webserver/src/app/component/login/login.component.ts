import { Component, OnInit } from '@angular/core';
import { FirebaseService, Test } from '../../services/firebase.service'
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [FirebaseService]
})
export class LoginComponent {

  loginUsername: string;
  loginPassword: string;
  errorMessage: string;
  loggedIn: any;

  constructor(private firebaseService: FirebaseService, private router:Router){

    let body = document.getElementsByTagName('body')[0];
    body.className = "";   //remove the classes
    body.classList.add("login");   //add the class

    this.loggedIn = firebaseService.isLogged$;

    firebaseService.errorMessage$.subscribe(e => {
      this.errorMessage = e;
      console.log(e);
    });
  }


  logout(){
    this.firebaseService.logout();
  }

  login2(){
    this.firebaseService.login2();
  }

  login(){
    if(this.loginUsername == "" || typeof this.loginUsername  === "undefined"){
      console.log("Username needed");
      this.errorMessage = "Username needed";
    } else {
      if(this.loginPassword == "" || typeof this.loginPassword  === "undefined"){
        console.log("Password needed");
        this.errorMessage = "Password needed";
      } else {
        this.errorMessage = "";
        this.firebaseService.login(this.loginUsername, this.loginPassword);
      }
    }
  }
}
