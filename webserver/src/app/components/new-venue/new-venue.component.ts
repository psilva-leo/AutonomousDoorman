import { Component, OnInit } from '@angular/core';
import {FirebaseService, Group} from "../../services/firebase.service";

@Component({
  selector: 'app-new-venue',
  templateUrl: './new-venue.component.html',
  styleUrls: ['./new-venue.component.scss']
})
export class NewVenueComponent implements OnInit {


  venue: Venue;
  groups: Group[];
  venues: string[];
  constructor(private firebaseService: FirebaseService){
    this.venue = {name: "", error: ""};
    this.groups = [{name: "", error: "", start: "08:00", end: "18:00"}];

    this.firebaseService.findVenues()
      .subscribe(
        venues => {
          console.log(this.venues);
          this.venues = [];
          for (let i = 0; i < venues.length; i++) {
            this.venues.push(venues[i].$key);
          }
        }
      );
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  addGroup(){
    this.groups.push({name: "", error: "", start: "08:00", end: "18:00"});
  }

  deleteGroup(index){
    if(this.groups.length > 1){
      this.groups.splice(index, 1);
    }else{
      this.groups[0].error = "One group must be created";
    }

  }

  submit(){
    let fail = false;
    if(this.venue.name == ""){
      fail = true;
      this.venue.error = "Venue name required";
    }else{
      this.venue.error = "";
    }

    console.log('venues length: '+this.venues.length);
    for(let i=0; i<this.venues.length; i++){
      console.log(this.venues[i]);
      if(this.venue.name == this.venues[i]){
        fail = true;
        this.venue.error = "Name already in use";
      }
    }

    for(let i=0; i<this.groups.length; i++){
      if(this.groups[i].name == ""){
        fail = true;
        this.groups[i].error = "Group name required";
      }else{
        this.groups[i].error = "";
      }
    }


    if(!fail){
      this.firebaseService.createvenue(this.venue.name, this.groups);
      console.log('New venue created');
    }else{
      console.log('Error creating Venue');
    }
  }

  reset(){
    this.venue.name = "";

    for(let i=0; i<this.groups.length; i++){
      this.groups[i].name = "";
    }
  }

  ngOnInit() {
  }

}

interface Venue{
  name: string;
  error: string;
}



