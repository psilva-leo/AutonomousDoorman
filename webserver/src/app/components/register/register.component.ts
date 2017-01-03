import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "../../services/firebase.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  username: string;
  email: string;
  password: string;
  passwordCheck: string;
  errorMessage: string;

  constructor(private firebaseService: FirebaseService, private router: Router) {
    firebaseService.errorMessage$.subscribe(e => {
      this.errorMessage = e;
      console.log(e);
    });
  }

  createAccount(){
    if(this.username == "" || typeof this.username  === "undefined"){
      this.errorMessage = "Username required";
    }else{
      if(this.email == "" || typeof this.email  === "undefined"){
        this.errorMessage = "Email required";
      }else{
        if(this.password == "" || typeof this.password  === "undefined"){
          this.errorMessage = "Password required";
        }else{
          if(this.passwordCheck == "" || typeof this.passwordCheck  === "undefined"){
            this.errorMessage = "Repeat password";
          }else{
            if(this.password != this.passwordCheck){
              this.errorMessage = "Passwords do not match";
            }else{
              this.firebaseService.register(this.username, this.email, this.password);
            }
          }
        }
      }
    }
  }

  ngOnInit() {
  }

}
