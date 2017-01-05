import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "../../../services/firebase.service";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  venues: any;
  venuesKeys: string[];

  constructor(private firebaseService: FirebaseService){
    this.firebaseService.findVenues()
      .subscribe(
        venues => {
          this.venues = venues;
          console.log(this.venues);
          this.venuesKeys = [];
          for (let i = 0; i < this.venues.length; i++) {
            this.venuesKeys.push(this.venues[i].$key);
          }
          console.log(this.venuesKeys);
        }
      );
  }

  ngOnInit() {
  }

}
