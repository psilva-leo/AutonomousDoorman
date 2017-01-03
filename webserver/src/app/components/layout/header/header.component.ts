import { Component, OnInit } from '@angular/core';
import {FirebaseService, UserInfo} from "../../../services/firebase.service";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public status: { isopen: boolean } = { isopen: false };
  userInfo: UserInfo;

  constructor(private firebaseService: FirebaseService) {
    this.getUserInfo();
  }

  getUserInfo(){
    this.userInfo = this.firebaseService.getUserInfo();
    console.log(this.userInfo);
  }

  public toggleDropdown($event:MouseEvent):void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  ngOnInit() {
  }

}
