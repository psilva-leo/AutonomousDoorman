import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { AngularFire, FirebaseListObservable } from "angularfire2";
import { FirebaseService, Test } from '../../services/firebase.service'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [FirebaseService]
})

export class HomeComponent implements OnInit, AfterViewChecked{
  title : string;
  tests : Test[];
  clock : any;
  constructor(private firebase: FirebaseService){
    let body = document.getElementsByTagName('body')[0];
    body.className = "";   //remove the classes
    body.classList.add("nav-md");   //add the class

    console.log('Home constructor');
    this.title = 'hey!';
  }

  ngOnInit(){
    this.firebase.findAllLessons()
      .subscribe(
        lessons => this.tests = lessons
      );
  }

  ngAfterViewChecked(){
    console.log('preparing to load...');
  }
  login(){
    this.firebase.login2();
  }

}
