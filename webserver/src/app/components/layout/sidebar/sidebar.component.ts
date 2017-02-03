import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {FirebaseService, UserInfo} from "../../../services/firebase.service";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  venues: any;
  venuesKeys: string[];
  userInfo: UserInfo;
  userPhoto: string;

  constructor(private firebaseService: FirebaseService, private ref: ChangeDetectorRef){
    this.firebaseService.findVenues()
      .subscribe(
        venues => {
          this.venues = venues;
          this.venuesKeys = [];
          for (let i = 0; i < this.venues.length; i++) {
            this.venuesKeys.push(this.venues[i].$key);
          }
        }
      );

    this.getUserInfo();
  }

  logout() {
    this.firebaseService.logout();
  }
  getUserInfo(){
    this.userInfo = this.firebaseService.getUserInfo();
    this.userPhoto = '/assets/img/loading_profile.png';
    this.firebaseService.getPhotoUrl(this.userInfo.photoURL).then(url => {
      this.userPhoto = url;
      this.ref.detectChanges();
    });
  }

  ngOnInit(){ }

}
