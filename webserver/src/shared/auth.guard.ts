import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import 'rxjs/Rx';
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {FirebaseService} from "../app/services/firebase.service";


@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private fireService: FirebaseService, private router: Router){ }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>| boolean{

      return this.fireService.getAuthenticated().map(user => {
            if(!user){
                this.router.navigate(['login']);
            }

            return user ? true: false;
        });
        // return true;
    };

}
