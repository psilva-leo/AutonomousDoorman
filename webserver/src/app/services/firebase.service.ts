import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireAuth, AngularFire} from "angularfire2";
import {Subject}    from 'rxjs/Subject';
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs/Observable";
import {Router} from "@angular/router";
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService{

  private _errorMessageSubject = new Subject<string>();
  errorMessage$ = this._errorMessageSubject.asObservable();
  user: any;
  private userInfo: UserInfo;
  private _isLoggedSubject = new Subject<boolean>();
  isLogged$ = this._isLoggedSubject.asObservable();

  private venues: any;
  private members: any;
  private groups: any;
  private storage: any;


  constructor(private db:AngularFireDatabase, private auth: AngularFireAuth, private router:Router){
    this.userInfo = {
      displayName: "",
      email: "",
      photoURL: "",
      uid: "",
    };

    this.members = {};
    this.groups = {};

    auth.subscribe(user => {
      this.user = user;
      this._isLoggedSubject.next(user != null);

      if(user != null){
        this.userInfo.displayName = this.user.auth.displayName;
        this.userInfo.email = this.user.auth.email;
        this.userInfo.uid = this.user.auth.uid;
        this.userInfo.photoURL= this.user.auth.photoURL;
      }

      this.findVenues().subscribe(venues => {
        this.venues = venues;

        for(let i=0; i<venues.length; i++){
          console.log(venues);
          this.members[venues[i].$key] = venues[i]['Members'];
          this.groups[venues[i].$key] = venues[i]['Groups'];
          console.log(this.members[venues[i].$key]);
        }
        console.log(this.members);
        console.log(this.groups);
      });
    });

    this.storage = firebase.storage().ref();

  }

  getURL(photourl: string):Observable<string> {
    return this.storage.child(photourl).getDownloadURL();
  }

  getPhotoUrl(photourl: string){
    return this.storage.child(photourl).getDownloadURL();
  }

  getAuthenticated(): Observable<any> { return this.auth; }

  getUserInfo(){
    return this.userInfo;
  }

  login(username: string, password: string){
    let error;
    this.auth.login({ email: username, password: password }).then(
        (success) => {
          console.log('Logged in');
          let body = document.getElementsByTagName('body')[0];
          body.className = "navbar-fixed sidebar-nav fixed-nav";   // add classes removed from login page
          this.user = success;
          this.router.navigate(['/']);
        }).catch(
        (err) => {
          console.log(err.message);
          if(err.message == "There is no user record corresponding to this identifier. The user may have been deleted."){
            this._errorMessageSubject.next("Wrong username/password");
          }else{
            this._errorMessageSubject.next(err.message);
          }
        });
    return error;
  }

  logout(){
    console.log('Logged out');
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  isLoggedFunc(){
      console.log(this.user);
      return (this.user != null);

  }

  register(username: string, email: string, password: string){
    this.auth.createUser({email: email, password: password})
      .catch(
        (err) => {
          console.log(err.message);
          if(err.message == "There is no user record corresponding to this identifier. The user may have been deleted."){
            this._errorMessageSubject.next("Wrong username/password");
          }else{
            this._errorMessageSubject.next(err.message);
          }
        })
      .then(() => {
      this.auth.login({email: email, password: password})
        .then(() => {
        if(this.user != null){
          this.user.auth.updateProfile({displayName: username, photoURL: this.user.auth.uid+'/Profile/1.jpg'});
          this.logout();
          let timer = Observable.timer(1000);
          timer.subscribe(x => {
            this.login(email, password);
          });
          let timer2 = Observable.timer(2000);
          timer2.subscribe(x => {
            this.router.navigate(['/']);
          });

        }
        });
      });
  }


  findVenues():Observable<any> {
    return  this.db.list(this.userInfo.uid+'/Venues');
  }

  findLogs():Observable<Log[]> {
    return  this.db.list(this.userInfo.uid+'/Logs');
  }

  findMembers(venue: string):Observable<any> {
    return  this.db.list(this.userInfo.uid+'/Venues/'+venue+'/Members');
  }

  findGroups(venue: string):Observable<any> {
    return  this.db.list(this.userInfo.uid+'/Venues/'+venue+'/Groups');
  }

  createInitialMember(venue: string, groups: Group[], memberInfo: Member){
    let data = {
      Members: { },
    };
    data.Members[memberInfo.id] = {
      Groups: { },
      Data: { },
    };

    data.Members[memberInfo.id]['Data'] = {
      email: memberInfo.email,
      name: memberInfo.name,
      photourl: memberInfo.photourl,
    };
    for(let i=0; i<groups.length; i++){
      data.Members[memberInfo.id]['Groups'][i] = {id: groups[i].name};
    }

    this.db.object(this.userInfo.uid+'/Venues/'+venue).update(data);
  }

  createAndAddMember(venue: string, group: string, memberInfo: Member){
    let data = { };
    memberInfo.id = this.members[venue].length;
    data[memberInfo.id] = {
      Data: {
        name: memberInfo.name,
        email: memberInfo.email,
        photourl: memberInfo.photourl,
      },
      Groups: {
        0: {
          id: group,
        }
      }
    };
    console.log(venue);
    this.db.object(this.userInfo.uid+'/Venues/'+venue+'/Members/').update(data);

    data = { };
    data[this.groups[venue][group]['Members'].length] = {id: memberInfo.id};
    this.db.object(this.userInfo.uid+'/Venues/'+venue+'/Groups/'+group+'/Members/').update(data);
  }

  addExistingMemberToGroup(venue: string, group: string, memberInfo: Member){
    this.findGroups(venue).subscribe(groups => {
      let data = { };
      for(let i=0; i<groups.length; i++){
        if(groups[i].$key == group){
          data[groups[i]['Members'].length] = {id: memberInfo.id};
          this.db.object(this.userInfo.uid+'/Venues/'+venue+'/Groups/'+group+'/Members').update(data);
          break;
        }
      }
    });

    this.findMembers(venue).subscribe(members => {
      let data ={ };
      for(let i=0; i<members.length; i++){
        if(members[i].$key == memberInfo.id){
          data[members[i]['Groups'].length] = {id: group};
          this.db.object(this.userInfo.uid+'/Venues/'+venue+'/Members/'+memberInfo.id+'/Groups').update(data);
          break;
        }
      }
    });
  }

  createvenue(venue: string, groups: Group[]){
    let data = {
      Groups: { },
    };

    for(let i=0; i<groups.length; i++){
      data.Groups[groups[i].name] = {
        Members: {
          0: {
           id: 1,
          },
        },
        Time: {
          end: groups[i].end,
          start: groups[i].start,
        }
      };
    }

    this.db.object(this.userInfo.uid+'/Venues/'+venue).update(data);

    let memberInfo = {
      name: this.userInfo.displayName,
      email: this.userInfo.email,
      id: "1",
      photourl: this.userInfo.uid+'/1/1.jpg',
      groups: [],
    };

    this.createInitialMember(venue, groups, memberInfo);

  }
}

export interface Member{
  name: string;
  email: string;
  id: string;
  photourl: string;
  groups: string[];
}


export interface Group{
  name: string;
  error: string;
  start: any;
  end: any;
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
  extra: string;
  venue: string;
  allowedBy: string;
}

export interface UserInfo{
  displayName: string;
  email: string;
  photoURL: string;
  uid: string;
}
