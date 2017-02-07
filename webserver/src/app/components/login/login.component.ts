import { Component, OnInit } from '@angular/core';
import { FirebaseService, Member } from '../../services/firebase.service'
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

  constructor(private firebaseService: FirebaseService, private router:Router){

    let body = document.getElementsByTagName('body')[0];
    body.className = "";   //remove the classes

    body.classList.add("login");   //add the class

    firebaseService.errorMessage$.subscribe(e => {
      this.errorMessage = e;
      console.log(e);
    });
  }

  register(){
    this.router.navigate(['register']);
  }

  logout(){
    this.firebaseService.logout();
    this.errorMessage = "";
  }

  forgotPasswprd(){
    // TODO: Implement forgot password page
    console.log('Forgot password');
  }

  login(){
    if(this.loginUsername == "" || typeof this.loginUsername  === "undefined"){
      console.log("Username needed");
      this.errorMessage = "Username required";
    } else {
      if(this.loginPassword == "" || typeof this.loginPassword  === "undefined"){
        console.log("Password needed");
        this.errorMessage = "Password required";
      } else {
        this.errorMessage = "";
        this.firebaseService.login(this.loginUsername, this.loginPassword);
      }
    }
  }
}
