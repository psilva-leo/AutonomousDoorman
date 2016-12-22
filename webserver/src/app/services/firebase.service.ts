import {Injectable, Inject} from '@angular/core';
import {FirebaseRef, AngularFireDatabase, AngularFireAuth} from "angularfire2";
import {Subject}    from 'rxjs/Subject';
import {BehaviorSubject} from "rxjs";
import {Observable} from "rxjs/Observable";

@Injectable()
export class FirebaseService{

  private _databaseRefSource = new Subject<Test[]>();
  databaseRef$ = this._databaseRefSource.asObservable();
  private _todos: BehaviorSubject<any> = new BehaviorSubject([]);
  public todos: Observable<any> = this._todos.asObservable();
  private user = null;

  constructor(private db:AngularFireDatabase, private auth: AngularFireAuth){
  }

  login(){
    this.auth.login({ email: 'psilva.leo@gmail.com', password: '123456' })
      .catch(e => console.log(e.message))
      .then(user => {
        console.log('Loged in!');
        this.user = user;
        console.log(this.user);
      });
  }

  findAllLessons():Observable<Test[]> {
    return  this.db.list('test');
  }
}

export interface Test{
  name: string;
  id: string;
}
