import { Component, OnInit } from '@angular/core';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import {FirebaseService, Member, Group} from "../../services/firebase.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers: [Modal],
})
export class TestComponent implements OnInit, CloseGuard, ModalComponent<CustomModalContext> {

  context: CustomModalContext;

  venue: Venue;
  groups: Group[];
  venues: string[];

  constructor(public dialog: DialogRef<CustomModalContext>, private firebaseService: FirebaseService,
              private modal: Modal, private router: Router) {

    this.context = dialog.context;
    this.context.isBlocking = false;
    this.context.showClose = true;

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
      alert('Group created!');
      this.reset();
    }else{
      console.log('Error creating Venue');
    }
  }

  reset(){
    this.venue.name = "";
    this.venue.error = "";

    for(let i=0; i<this.groups.length; i++){
      this.groups[i].name = "";
      this.groups[i].error = "";
    }
  }

  closeModal(){
    this.dialog.dismiss();
  }

  onKeyUp(value) {
    this.dialog.close();
  }

  beforeDismiss(): boolean{
    return true;
  }

  beforeClose(): boolean{
    return true;
  }

  ngOnInit(){ }

}

export class CustomModalContext extends BSModalContext {}

interface Venue{
  name: string;
  error: string;
}
