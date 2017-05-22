import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireAuth, AngularFire} from "angularfire2";
import {Subject}    from 'rxjs/Subject';
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs/Observable";
import {Router} from "@angular/router";
import * as firebase from 'firebase';
import {ResponseContentType, RequestMethod, Http} from "@angular/http";

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

  private firstFlag: boolean;


  constructor(private db:AngularFireDatabase, private auth: AngularFireAuth, private router:Router,
  private http: Http){
    this.userInfo = {
      displayName: "",
      email: "",
      photoURL: "",
      uid: "",
    };

    this.members = {};
    this.groups = {};
    this.firstFlag = false;

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

  uploadMemberImage(file: File | Blob, venue: string, id: string, fileName: string){
    this.storage.child(this.userInfo.uid+'/'+venue+'/'+id+'/'+fileName+'.jpg').put(file).then(() => {
        if(fileName == '1'){
          console.log('flag up');
          this.firstFlag = true;
        }
      }
    );
  }

  uploadLogImage(file: File, id: string){
    this.storage.child(this.userInfo.uid+'/Logs/'+id+'.jpg').put(file);
  }

  getURL(photourl: string):Observable<string> {
    return this.storage.child(photourl).getDownloadURL();
  }

  getPhotoUrl(photourl: string){
    console.log(photourl);
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
    this.getPhotoUrl(this.userInfo.uid+'/Profile/1.jpg').then(url => {
    let self = this;
      let xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = function(event) {
        let blob = xhr.response;
        self.uploadMemberImage(blob,venue, '1', '1');
      };
      xhr.open('GET', url);
      xhr.send();
    });

    this.notifyNewMember(venue);
  }

  createAndAddMember(venue: string, group: string, memberInfo: Member, filelist: FileList){
    this.firstFlag = false;
    let data = { };
    memberInfo.id = this.members[venue].length;

    this.storage.child(this.userInfo.uid+'/'+venue+'/'+memberInfo.id+'/1.jpg').put(filelist[0]).then(() => {
      data[memberInfo.id] = {
        Data: {
          name: memberInfo.name,
          email: memberInfo.email,
          photourl: this.userInfo.uid + '/' + venue + '/' + memberInfo.id + '/1.jpg',
        },
        Groups: {
          0: {
            id: group,
          }
        }
      };

      this.db.object(this.userInfo.uid + '/Venues/' + venue + '/Members/').update(data);

      data = {};
      data[this.groups[venue][group]['Members'].length] = {id: memberInfo.id};
      this.db.object(this.userInfo.uid + '/Venues/' + venue + '/Groups/' + group + '/Members/').update(data);
      }
    );
    for(let i=1; i<filelist.length; i++){
      this.uploadMemberImage(filelist[i], venue, memberInfo.id, (i+1).toString());
    }

    this.notifyNewMember(venue);


  }

  addExistingMemberToGroup(venue: string, group: string, memberInfo: Member){
    let data = {};
    data[this.groups[venue][group]['Members'].length] = {id: memberInfo.id};
    this.db.object(this.userInfo.uid+'/Venues/'+venue+'/Groups/'+group+'/Members').update(data);

    data = {};
    data[this.members[venue][memberInfo.id]['Groups'].length] = {id: group};
    this.db.object(this.userInfo.uid+'/Venues/'+venue+'/Members/'+memberInfo.id+'/Groups').update(data);
  }

  createGroup(venue:string, name: string, start: string, end:string, memberInfo: Member){
    let data = {};
    data[name] = {
      Time: {}
    };

    data[name]['Time']['start'] = start;
    data[name]['Time']['end'] = end;

    data[name]['Members'] = {
      0: {
        id: memberInfo.id
      }
    };
    this.db.object(this.userInfo.uid+'/Venues/'+venue+'/Groups').update(data);

    data = {};
    data[this.members[venue][memberInfo.id]['Groups'].length] = {id: name};
    this.db.object(this.userInfo.uid+'/Venues/'+venue+'/Members/'+memberInfo.id+'/Groups').update(data);
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
      photourl: this.userInfo.uid+'/'+venue+'/1/1.jpg',
      groups: [],
    };

    this.createInitialMember(venue, groups, memberInfo);

  }

  deleteVenue(venue: string){
    this.router.navigate(['/']);
    this.db.object(this.userInfo.uid+'/Venues/'+venue).remove();
    console.log(venue);
  }

  deleteMember(venue: string, id: string, group: string){
    console.log(venue +' '+id);
    console.log(this.members[venue][id]['Groups'].length);

    let i = 1;
    function loop(self){
      console.log(self.userInfo.uid+'/'+venue+'/'+id+'/'+i+'.jpg');
      self.storage.child(self.userInfo.uid+'/'+venue+'/'+id+'/'+i+'.jpg').delete()
        .then(res => {
          i++;
          loop(self);
        });
    }

    // If group has just one member delete group
    if(this.groups[venue][group]['Members'].length == 1){
      this.deleteGroup(group, venue); // Delete members included in delete group
    }else {
      for (let m in this.groups[venue][group]['Members']) {
        let memberID = this.groups[venue][group]['Members'][m]['id'];
        if (memberID == id) {
          this.db.object(this.userInfo.uid+'/Venues/'+venue+'/Groups/'+group+'/Members/'+m).remove();
        }
      }

      for (let g in this.members[venue]['Groups']) {
        if (this.members[venue]['Groups'][g]['id'] == group) {
          this.db.object(this.userInfo.uid+'/Venues/'+venue+'/Members/'+id+'/Groups/'+g).remove();
        }
      }
    }

    if (this.members[venue][id]['Groups'].length == 1){
      // Deleting photos
      loop(this);

      // Deleting member info
      this.db.object(this.userInfo.uid+'/Venues/'+venue+'/Members/'+id).remove();
      this.notifyDeletedMember(venue);
    }


  }

  deleteGroup(group: string, venue: string){
    for(let member in this.groups[venue][group]['Members']){
      let memberID = this.groups[venue][group]['Members'][member]['id'];
      console.log(this.groups[venue][group]['Members'][member]['id']);

      for(let i in this.members[venue][memberID]['Groups']){
        if(this.members[venue][memberID]['Groups'][i]['id'] == group){
          if(this.members[venue][memberID]['Groups'].length == 1){
            this.db.object(this.userInfo.uid+'/Venues/'+venue+'/Members/'+memberID).remove();
            this.notifyDeletedMember(venue);
          }else{
            this.db.object(this.userInfo.uid+'/Venues/'+venue+'/Members/'+memberID+'/Groups/'+i).remove()
          }
        }
      }
    }

    this.db.object(this.userInfo.uid+'/Venues/'+venue+'/Groups/'+group).remove()
  }

  editGroup(group: string, venue: string, start: string, end: string){
    let edit = {};
    edit['start'] = start;
    edit['end'] = end;

    this.db.object(this.userInfo.uid+'/Venues/'+venue+'/Groups/'+group+'/Time/').set(edit);
  }

  notifyNewMember(venue: string){
    let timestamp = Math.floor(Date.now() / 1000);
    let data = {};
    data[timestamp] = 'New Member';
    this.db.object(this.userInfo.uid+'/Venues/'+venue+'/CrossConnection').set(data);
  }

  notifyDeletedMember(venue: string){
    let timestamp = Math.floor(Date.now() / 1000);
    let data = {};
    data[timestamp] = 'Deleted Member';
    this.db.object(this.userInfo.uid+'/Venues/'+venue+'/CrossConnection').set(data);
  }

  openDoor(venue: string){
    let timestamp = Math.floor(Date.now() / 1000);
    let data = {};
    data[timestamp] = 'Open Door';
    this.db.object(this.userInfo.uid+'/Venues/'+venue+'/CrossConnection').set(data);
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
  email: string;
  venue: string;
  permission: string;
  success: string;
  photourl: string;
  attemptPhoto: string;
  $key;
}

export interface UserInfo{
  displayName: string;
  email: string;
  photoURL: string;
  uid: string;
}
