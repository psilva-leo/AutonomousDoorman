import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireAuth, AngularFire} from "angularfire2";
import {Subject}    from 'rxjs/Subject';
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs/Observable";
import {Router} from "@angular/router";

@Injectable()
export class FirebaseService{

  private _errorMessageSubject = new Subject<string>();
  errorMessage$ = this._errorMessageSubject.asObservable();
  user: any;
  private userInfo: UserInfo;
  private _isLoggedSubject = new Subject<boolean>();
  isLogged$ = this._isLoggedSubject.asObservable();


  constructor(private db:AngularFireDatabase, private auth: AngularFireAuth, private router:Router){

    this.userInfo = {
      displayName: "",
      email: "",
      photoURL: "",
      uid: "",
    };

    auth.subscribe(user => {
      this.user = user;
      this._isLoggedSubject.next(user != null);

      if(user != null){
        this.userInfo.displayName = this.user.auth.displayName;
        this.userInfo.email = this.user.auth.email;
        this.userInfo.uid = this.user.auth.uid;
        this.userInfo.photoURL= this.user.auth.photoURL;
      }
    });

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
          this.user.auth.updateProfile({displayName: username, photoURL: null});
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

  findAllLessons():Observable<MemberInfo[]> {
    return  this.db.list('test');
  }

  findVenues():Observable<any> {
    return  this.db.list(this.userInfo.uid+'/Venues');
  }

  findLogs():Observable<Log[]> {
    return  this.db.list(this.userInfo.uid+'/Logs');
  }

  createMember(venue: string, groups: Group[], memberInfo: MemberInfo){
    let data = {
      Members: { },
    };
    data.Members[memberInfo.id] = {
      Groups: { },
      Data: { },
    };

    for(let i=0; i<groups.length; i++){
      data.Members[memberInfo.id]['Groups']['g'+(i+1)] = 'TestGroup';
      data.Members[memberInfo.id]['Data'] = {
        email: memberInfo.email,
        name: memberInfo.name,
      };
    }

    this.db.object(this.userInfo.uid+'/Venues/'+venue).update(data);
  }

  createvenue(venue: string, groups: Group[]){
    let data = {
      Groups: { },
    };

    for(let i=0; i<groups.length; i++){
      data.Groups[groups[i].name] = {
        Members: {
          1: 'true',
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
    };

    this.createMember(venue, groups, memberInfo);

  }
}

export interface MemberInfo{
  name: string;
  email: string;
  id: string;
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
