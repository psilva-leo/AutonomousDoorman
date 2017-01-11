import {Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FirebaseService, MemberInfo} from "../../services/firebase.service";

@Component({
  selector: 'app-venue-detail',
  templateUrl: './venue-detail.component.html',
  styleUrls: ['./venue-detail.component.scss']
})
export class VenueDetailComponent implements OnInit, OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes');
    console.log(changes);
  }

  venueName: string;
  venue: Venue;
  groups: string[];
  groupMembers: {};
  members: {};
  membersId: string[];

  newMember: MemberInfo;
  createMember: boolean[];
  constructor(private firebaseService: FirebaseService, private route: ActivatedRoute) {
    this.createMember = [];
    this.newMember = {name: "", email: "", id: ""};
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
            this.membersId.push(members[i].$key);
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

  addMember(index){
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

interface Member{
  email: string;
  name: string;
  id: string;
  groups: string[];
}

interface Venue{
  name: string;
  error: string;
}


