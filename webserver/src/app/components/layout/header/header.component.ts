import { Component, OnInit } from '@angular/core';
import {FirebaseService, UserInfo} from "../../../services/firebase.service";
import {StatisticsService} from "../../../services/statistics.service";
import {TranslateService} from "ng2-translate";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public status: { isopen: boolean } = { isopen: false };
  userInfo: UserInfo;
  userPhoto: string;

  constructor(private firebaseService: FirebaseService, private statisticsService: StatisticsService,
              private translate: TranslateService) {

    this.getUserInfo();
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }

  getUserInfo(){
    this.userInfo = this.firebaseService.getUserInfo();
    this.userPhoto = '/assets/img/loading_profile.png';
    this.firebaseService.getPhotoUrl(this.userInfo.photoURL).then(url => {
      this.userPhoto = url;
    });
  }

  public toggleDropdown($event:MouseEvent):void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  test(){
    this.statisticsService.calculateWeekly();
  }

  logout(){
    console.log('logged out');
    this.firebaseService.logout();
  }
  ngOnInit() {
  }

}
