import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {overlayConfigFactory} from 'angular2-modal';
import {Modal, BSModalContext} from 'angular2-modal/plugins/bootstrap';
import {AddUserModalComponent} from "../add-user-modal/add-user-modal.component";
import {FirebaseService, Member} from "../../services/firebase.service";
import {CreateGroupModalComponent} from "../create-group-modal/create-group-modal.component";
import {EditGroupModalComponent} from "../edit-group-modal/edit-group-modal.component";
import {isUndefined} from "util";

@Component({
  selector: 'app-venue-detail',
  templateUrl: './venue-detail.component.html',
  styleUrls: ['./venue-detail.component.scss'],
  providers: [Modal],
})

export class VenueDetailComponent implements OnInit{

  venueName: string;
  venue: Venue;
  groups: Group[];
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
          console.log(members);
          for(let i=0; i<members.length; i++){
            this.members[members[i].$key] = {};
            this.members[members[i].$key]['groups'] = [];
            this.members[members[i].$key]['name'] = members[i]['Data']['name'];
            this.members[members[i].$key]['email'] = members[i]['Data']['email'];
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
          let g: Group = {id:groups[i].$key, start: groups[i]['Time']['start'], end: groups[i]['Time']['end']};
          console.log(g);
          this.groups.push(g);
        }

        // Get group's groupMembers id
        for (let i = 0; i < groups.length; i++){
          this.groupMembers[this.groups[i].id] = [];
          for(let j=0; j<groups[i]['Members'].length; j++){
            if(!isUndefined(groups[i]['Members'][j]))
              this.groupMembers[this.groups[i].id].push(groups[i]['Members'][j]['id']);
          }
        }
        console.log(this.groupMembers);
      });
    });
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  openCreateUser(index) {
    this.modal.open(AddUserModalComponent, overlayConfigFactory({ venueName: this.venueName, groupName: this.groups[index].id},
      BSModalContext));
  }

  editGroup(index){
    this.modal.open(EditGroupModalComponent, overlayConfigFactory({ venueName: this.venueName, groupName: this.groups[index].id},
      BSModalContext));
  }

  openCreateGroup() {
    this.modal.open(CreateGroupModalComponent, overlayConfigFactory({ venueName: this.venueName, groupName: this.groups[0].id},
      BSModalContext));
  }

  addMember(index){
    console.log(this.groups[index].id);
    if(typeof this.createMember[index] !== 'undefined'){
      this.createMember[index] = true;
    }else{
      this.createMember.push(true);
    }
  }

  deleteMember(id, group){
    console.log(id);
    console.log(group);
    this.firebaseService.deleteMember(this.venueName, id, group);
    // this.createMember[index] = false;
  }

  deleteGroup(group:string){
    this.modal.confirm()
      .size('sm')
      .isBlocking(true)
      .showClose(true)
      .keyboard(27)
      .title('Delete Confirmation')
      .body('Are you sure you want to delete: '+ group)
      .open()
      .then(dialog => dialog.result)
      .then(result => {
        this.firebaseService.deleteGroup(group, this.venueName);
        console.log('confirmed');
      })
      .catch(err => {});


  }

  submit(index, memberInfo){
    console.log('add member');
    console.log(memberInfo);
    console.log(this.venueName);
    console.log(this.groups[index].id);
    this.firebaseService.addExistingMemberToGroup(this.venueName, this.groups[index].id, memberInfo);
  }

  reset(){ }

  openDoor(){
    console.log('open door');
    this.firebaseService.openDoor(this.venueName);
  }

  ngOnInit(){ }


}

interface Venue{
  name: string;
  error: string;
}

interface Group{
  id: string;
  start: string;
  end: string;
}

