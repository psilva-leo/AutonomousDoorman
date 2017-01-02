import {Injectable, Inject} from '@angular/core';
import {AngularFireDatabase, AngularFireAuth, AngularFire} from "angularfire2";
import {Subject}    from 'rxjs/Subject';
import {BehaviorSubject} from "rxjs";
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs/Observable";
import {Router} from "@angular/router";

@Injectable()
export class FirebaseService{

  private _errorMessageSubject = new Subject<string>();
  errorMessage$ = this._errorMessageSubject.asObservable();
  user: any;
  private _isLoggedSubject = new Subject<boolean>();
  isLogged$ = this._isLoggedSubject.asObservable();


  constructor(private db:AngularFireDatabase, private auth: AngularFireAuth, private router:Router){

      auth.subscribe(user => {
          this.user = user;
          this._isLoggedSubject.next(user != null);
        });

  }

    getAuthenticated(): Observable<any> { return this.auth; }

  login2(){
    this.auth.login({ email: 'psilva.leo@gmail.com', password: '123456' })
        .catch(e => console.log(e.message))
        .then(user => {
          console.log('Logged in!');
          this.user = user;
          console.log(this.user);
        });
  }

  login3(){
    this.auth.login({ email: 'test@gmail.com', password: '123456' })
        .catch(e => console.log(e.message))
        .then(user => {
          console.log('Logged in!');
          this.user = user;
          console.log(this.user);
        });
  }

  login(username, password){
    let error;
    if(this.user != null){
      console.log(this.user);
      this.router.navigate(['/']); // tells them they've been logged out (somehow)
      return 'already loged in';
    }else{
      console.log('Not loged in');
      this.auth.login({ email: username, password: password }).then(
          (success) => {
            this.user = success;
            console.log(success);
            this.router.navigate(['/']);
            return 'sucess';
          }).catch(
          (err) => {
            console.log(err.message);
            this._errorMessageSubject.next(err.message);
          });
      return error;
    }

  }

  logout(){
    console.log('Logged out');
    this.auth.logout();
  }

  isLoggedFunc(){
      console.log(this.user);

      return (this.user != null);

  }

  findAllLessons():Observable<Test[]> {
    return  this.db.list('test');
  }
}

export interface Test{
  name: string;
  id: string;
}