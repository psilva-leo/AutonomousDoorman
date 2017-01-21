import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Overlay, overlayConfigFactory} from 'angular2-modal';
import {Modal, BSModalContext} from 'angular2-modal/plugins/bootstrap';
import {AddUserModalComponent} from "../add-user-modal/add-user-modal.component";
import {FirebaseService, Member} from "../../services/firebase.service";
import {Observable, Subject} from "rxjs";

@Component({
  selector: 'app-venue-detail',
  templateUrl: './venue-detail.component.html',
  styleUrls: ['./venue-detail.component.scss'],
  providers: [Modal],
})

export class VenueDetailComponent implements OnInit{

  venueName: string;
  venue: Venue;
  groups: string[];
  groupMembers: {};
  members: {};
  membersId: string[];

  newMember: Member;
  createMember: boolean[];
  constructor(private firebaseService: FirebaseService, private route: ActivatedRoute, private modal: Modal,
              private ref: ChangeDetectorRef) {
    this.createMember = [];
    this.newMember = {name: "", email: "", id: "", photourl: "", groups: []};
    this.groups = [];
    this.groupMembers = {};


    this.route.params.subscribe(params => {
      this.venueName = params['id'];

      this.firebaseService.findMembers(this.venueName).subscribe(members => {
        this.members = {};
        this.membersId = [];
        if(members.length > 0 && typeof members[0] != "undefined"){
          for(let i=0; i<members.length; i++){
            this.members[members[i].$key] = {};
            this.members[members[i].$key]['groups'] = [];
            this.members[members[i].$key]['name'] = members[i]['Data'].name;
            this.members[members[i].$key]['email'] = members[i]['Data'].email;
            this.members[members[i].$key]['photourl'] = '/assets/img/loading_profile.png';
            this.members[members[i].$key]['id'] = members[i].$key;
            this.firebaseService.getPhotoUrl(members[i]['Data']['photourl']).then(url => {
              this.members[members[i].$key]['photourl'] = url;
              this.membersId.push(members[i].$key);
              this.ref.detectChanges();
            });

            for (let j = 0; j < members[i]['Groups'].length; j++) {
              this.members[members[i].$key]['groups'].push(members[i]['Groups'][j].id);
            }
          }
          console.log(this.members);
        }
      });

      this.firebaseService.findGroups(this.venueName).subscribe(groups => {
        // Get group's names
        this.groups = [];
        for (let i = 0; i < groups.length; i++){
          this.groups.push(groups[i].$key);
        }

        // Get group's groupMembers id
        for (let i = 0; i < groups.length; i++){
          this.groupMembers[this.groups[i]] = [];
          for(let j=0; j<groups[i]['Members'].length; j++){
            this.groupMembers[this.groups[i]].push(groups[i]['Members'][j]['id']);
          }
        }
        console.log(this.groupMembers);
      });
    });
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  openCustom(index) {
    let possibleMembers: Member[];
    possibleMembers = [];

    for(let i=0; i<this.membersId.length; i++){
      let dontAdd = false;
      console.log(this.groups[index]);
      for(let j=0; j<this.members[this.membersId[i]].groups.length; j++){
        if(this.members[this.membersId[i]].groups[j] == this.groups[index]){
          dontAdd = true;
        }
      }
      if(!dontAdd){
        console.log(this.members[this.membersId[i]]);
        let tmp: Member;
        tmp = {
          email: this.members[this.membersId[i]].email,
          name: this.members[this.membersId[i]].name,
          id: this.members[this.membersId[i]].id,
          photourl: this.members[this.membersId[i]].photourl,
          groups: [],
        };

        for(let j=0; j<this.members[this.membersId[i]].groups.length; j++){
          tmp.groups.push(this.members[this.membersId[i]].groups[j]);
        }
        possibleMembers.push(tmp);
      }
    }
    console.log(possibleMembers);

    return this.modal.open(AddUserModalComponent,  overlayConfigFactory({ venueName: this.venueName, groupName: this.groups[index],
      groupMembers: possibleMembers}, BSModalContext));
  }

  addMember(index){
    console.log(this.groups[index]);
    if(typeof this.createMember[index] !== 'undefined'){
      this.createMember[index] = true;
    }else{
      this.createMember.push(true);
    }
  }

  deleteMember(index){
    this.createMember[index] = false;
  }

  submit(index, memberInfo){
    console.log('add member');
    console.log(memberInfo);
    console.log(this.venueName);
    console.log(this.groups[index]);
    this.firebaseService.addExistingMemberToGroup(this.venueName, this.groups[index], memberInfo);
  }

  reset(){

  }


  ngOnInit(){

  }


}

interface Venue{
  name: string;
  error: string;
}


