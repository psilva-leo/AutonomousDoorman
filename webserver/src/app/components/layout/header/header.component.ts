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

  constructor(private firebaseService: FirebaseService, private statisticsService: StatisticsService,
              private translate: TranslateService) {

    this.getUserInfo();
    translate.addLangs(['en', 'pt-br']);
    translate.setDefaultLang('en');
    translate.use('en');
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }

  getUserInfo(){
    this.userInfo = this.firebaseService.getUserInfo();
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
