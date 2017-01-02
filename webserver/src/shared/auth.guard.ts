import {
    CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild,
    CanLoad, Route
} from "@angular/router";
import 'rxjs/Rx';
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {FirebaseService} from "../app/services/firebase.service";
import {FirebaseAuth, FirebaseAuthState} from "angularfire2";


@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad{

    constructor(private auth: FirebaseAuth, private fireService: FirebaseService, private router: Router){

    }

    canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
        console.log('can load');
        return true;
    };

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

        return this.fireService.getAuthenticated().map(user => {
            console.log('child');
            console.log(user ? true: false);
            if (!user) {
                this.router.navigate(['login']);
            }

            return user ? true: false;
        })
    };

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>| boolean{


      // return this.auth
      //   .take(1)
      //   .map((authState: FirebaseAuthState) => !!authState)
      //   .do(authenticated => {
      //     if (!authenticated) this.router.navigate(['/login']);
      //   });

      return this.fireService.getAuthenticated().map(user => {
            console.log(user ? true: false);
            if(!user){
                this.router.navigate(['login']);
            }

            return user ? true: false;
        });
        // return true;
    };

}
