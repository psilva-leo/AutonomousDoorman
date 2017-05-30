import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireAuth, AngularFire} from "angularfire2";
import {Subject}    from 'rxjs/Subject';
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs/Observable";
import {Router} from "@angular/router";
import {userInfo} from "os";
import {FirebaseService} from "./firebase.service";

@Injectable()
export class StatisticsService{

  private _weekDataSubject = new Subject<any>();
  weekData$ = this._weekDataSubject.asObservable();

  private logs: Log[];
  private venues: any[];

  public weekLabels: string[];

  constructor(private db:AngularFireDatabase, private firebaseService: FirebaseService, private router:Router){
    this.logs = [];
    this.findLogs().subscribe(logs => {
      this.logs = logs;
    });

    this.venues = [];
    this.findVenues().subscribe(venues => this.venues = venues);
  }

  findLogs():Observable<Log[]> {
    let userInfo = this.firebaseService.getUserInfo();
    return  this.db.list(userInfo.uid+'/Logs');
  }

  findGroups():Observable<Log[]> {
    let userInfo = this.firebaseService.getUserInfo();
    return  this.db.list(userInfo.uid+'/Logs');
  }

  findVenues():Observable<string[]> {
    let userInfo = this.firebaseService.getUserInfo();
    console.log('>>>>>'+userInfo.uid);
    return  this.db.list(userInfo.uid+'/Venues');
  }


  calculateMonthly(){
    const count = {};
    const venuesKeys = [];

    // Setting count to 0 for each venues
    // console.log('length: '+this.venues.length);
    for(let i=0; i<this.venues.length; i++){
      count[this.venues[i].$key] = 0;
      venuesKeys.push(this.venues[i].$key);
    }

    for(let i=0; i<this.logs.length; i++){
      let allowedBy = this.logs[i].permission;
      let venue = this.logs[i].venue;

      let year = this.logs[i].date.year;
      let month = this.logs[i].date.month;
      let day = this.logs[i].date.day;
      let time = this.logs[i].date.time;
      let date = new Date(year+"-"+month+"-"+day+":"+time);

      let daymil = 24*60*60*1000*30;
      let timeDiff = Date.now() - date.getTime();
      if(timeDiff/daymil <= 1){
        count[venue] += 1;

        // Check for entrance due to allowed by group membership
        if(allowedBy.split(' ')[0] == 'Group'){
          // console.log('Allowed by '+allowedBy.split(' ')[1]);
        }
      }
    }
    let countArray = [];

    for(let i=0; i<venuesKeys.length; i++){
      countArray.push(count[venuesKeys[i]]);
    }

    return {labels: venuesKeys, values: countArray}
  }

  calculateWeekly(){
    const count = {};
    const venuesKeys = [];

    // Setting count to 0 for each venues
    // console.log('length: '+this.venues.length);
    for(let i=0; i<this.venues.length; i++){
      count[this.venues[i].$key] = 0;
      venuesKeys.push(this.venues[i].$key);
    }

    for(let i=0; i<this.logs.length; i++){
      let allowedBy = this.logs[i].permission;
      let venue = this.logs[i].venue;

      let year = this.logs[i].date.year;
      let month = this.logs[i].date.month;
      let day = this.logs[i].date.day;
      let time = this.logs[i].date.time;
      let date = new Date(year+"-"+month+"-"+day+":"+time);

      let daymil = 24*60*60*1000*7;
      let timeDiff = Date.now() - date.getTime();
      if(timeDiff/daymil <= 1){
        count[venue] += 1;

        // Check for entrance due to allowed by group membership
        if(allowedBy.split(' ')[0] == 'Group'){
          // console.log('Allowed by '+allowedBy.split(' ')[1]);
        }
      }
    }
    let countArray = [];

    for(let i=0; i<venuesKeys.length; i++){
      countArray.push(count[venuesKeys[i]]);
    }

    return {labels: venuesKeys, values: countArray}
  }


}


export interface Date{
  year: string;
  month: string;
  day: string;
  time: string;
}

export interface Log{
  name: string;
  id: string;
  date: Date;
  email: string;
  venue: string;
  permission: string;
}

export interface UserInfo{
  displayName: string;
  email: string;
  photoURL: string;
  uid: string;
}
