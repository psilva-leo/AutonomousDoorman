import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from "angularfire2";
import { FirebaseService, Test } from '../../services/firebase.service'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [FirebaseService]
})

export class HomeComponent implements OnInit{
  title : string;
  tests : Test[];
  clock : any;
  constructor(private firebase: FirebaseService){
    console.log('constructor');
    this.title = 'hey!';
    // this.clock = firebase.todos;
  }

  ngOnInit(){
    this.firebase.findAllLessons()
      .subscribe(
        lessons => this.tests = lessons
      );
  }

  login(){
    this.firebase.login();
  }

}
