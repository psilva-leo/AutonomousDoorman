import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import {FirebaseService, Member} from "../../services/firebase.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-create-group-modal',
  templateUrl: './create-group-modal.component.html',
  styleUrls: ['./create-group-modal.component.scss']
})
export class CreateGroupModalComponent implements OnInit, CloseGuard, ModalComponent<CustomModalContext> {

  context: CustomModalContext;
  groupName: string;
  start: string;
  end: string;
  confirmationMessage: string;
  members: Member[];
  addedList: boolean[];

  constructor(public dialog: DialogRef<CustomModalContext>, private firebaseService: FirebaseService,
              private modal: Modal, private ref: ChangeDetectorRef) {

    this.context = dialog.context;
    this.context.isBlocking = false;
    this.confirmationMessage = "";
    this.addedList = [];
    this.groupName = "";
    this.start = "";
    this.end = "";

    this.firebaseService.findMembers(this.context.venueName).subscribe(members => {
      this.members = [];

      for(let i=0; i<members.length; i++) {
        let newMember: Member;
        newMember = {email:members[i]['Data']['email'], name: members[i]['Data']['name'], id:(i+1).toString(), groups: [],
          photourl: '/assets/img/loading_profile.png'};

        for (let j = 0; j < members[i]['Groups'].length; j++) {
          newMember.groups.push(members[i]['Groups'][j].id);
        }

        this.members.push(newMember);
        this.firebaseService.getPhotoUrl(members[i]['Data']['photourl']).then(url => {
          this.members[i].photourl = url;
          this.ref.detectChanges();
        });
        this.addedList.push(false);
      }
    });
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  onKeyUp(value) {
    this.dialog.close();
  }

  addMemberToGroup(index){
    this.addedList[index] = !this.addedList[index];
  }

  submit(){
    this.groupName = this.groupName.trim();
    if(this.groupName != "" && this.start != "" && this.end != "" && this.addedList.indexOf(true) != -1){
      let first = this.addedList.indexOf(true);
      this.firebaseService.createGroup(this.context.venueName, this.groupName, this.start, this.end, this.members[first]);
      for(let i=first+1; i<this.addedList.length; i++){
        if(this.addedList[i]){
          this.firebaseService.addExistingMemberToGroup(this.context.venueName, this.groupName, this.members[i]);
        }
      }
      this.dialog.close();
    }else{
      this.confirmationMessage = "Error: Could mot create member because the name or email are blank or no photo were added.";
    }
  }

  reset(){
    this.confirmationMessage = "";
    this.start = "";
    this.end = "";
    this.groupName = "";
  }

  beforeDismiss(): boolean{
    return true;
  }

  beforeClose(): boolean{
    return true;
  }

  ngOnInit(){ }

}

export class CustomModalContext extends BSModalContext {
  public venueName: string;
}

