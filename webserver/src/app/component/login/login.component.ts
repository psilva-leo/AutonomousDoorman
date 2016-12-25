import { Component, OnInit } from '@angular/core';
import { FirebaseService, Test } from '../../services/firebase.service'
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [FirebaseService]
})
export class LoginComponent implements OnInit {

  loginUsername: string;
  loginPassword: string;
  errorMessage: string;
  constructor(private firebaseService: FirebaseService, private router:Router){

    let body = document.getElementsByTagName('body')[0];
    body.className = "";   //remove the classes
    body.classList.add("login");   //add the class

    firebaseService.isLogged.subscribe(sucess => {
      if(sucess != null){
        console.log('loged in user');
        // this.router.navigate(['/']);
      }else{
        console.log('no user loged in');
      }
    });

    firebaseService.errorMessage$.subscribe(e => {
      this.errorMessage = e;
      console.log(e);
    });
  }

  ngOnInit(){ }

  logout(){
    this.firebaseService.logout();
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
