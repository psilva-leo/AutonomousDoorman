import { Component, OnInit } from '@angular/core';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import {FirebaseService, Member} from "../../services/firebase.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-user-modal',
  templateUrl: './add-user-modal.component.html',
  styleUrls: ['./add-user-modal.component.scss'],

})
export class AddUserModalComponent implements OnInit, CloseGuard, ModalComponent<CustomModalContext> {

  context: CustomModalContext;

  public wrongAnswer: boolean;
  newMember: Member;
  showCreate: boolean;
  createBtn: string;
  confirmationMessage: string;

  constructor(public dialog: DialogRef<CustomModalContext>, private firebaseSerice: FirebaseService,
              private modal: Modal, private router: Router) {

    this.newMember = {name: "", email: "", id: "", groups: []};
    this.context = dialog.context;
    console.log(this.context);
    this.wrongAnswer = true;
    this.showCreate = false;
    this.createBtn = "Create Member";
    this.confirmationMessage = "";
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  showCreateBtn(){
    this.showCreate = !this.showCreate;
    if(this.showCreate){
      this.createBtn = "Close Member";
    }else{
      this.createBtn = "Create Member";
    }
    this.confirmationMessage = "";
  }

  onKeyUp(value) {
    console.log(this.newMember);
    this.dialog.close();
  }

  addMemberToGroup(member){
    console.log('clicked');
    console.log(member);
    this.firebaseSerice.addExistingMemberToGroup(this.context.venueName, this.context.groupName, member);
  }

  createNewMember(){
    console.log('create new member: '+this.newMember.name+" "+this.newMember.email);
    this.firebaseSerice.createAndAddMember(this.context.venueName, this.context.groupName, this.newMember);
  }

  submit(){

    this.newMember.name = this.newMember.name.trim();
    this.newMember.email = this.newMember.email.trim();
    if(this.newMember.name != "" && typeof this.newMember.name != "undefined"
      && this.newMember.email != "" && typeof this.newMember.email != "undefined"){
      if(this.newMember.email.indexOf('@') == -1){
        this.confirmationMessage = "Error: Email not formatted correctly.";
      }else{
        this.createNewMember();
        this.showCreateBtn(); // To close the creation form
        this.confirmationMessage = this.newMember.name + " successfully added to " + this.context.groupName;
        this.newMember = {name: "", email: "", id: "", groups: []};
      }

    }else{
      this.confirmationMessage = "Error: Could mot create member because the name or email are blank";
    }

  }

  beforeDismiss(): boolean{
    return true;
  }

  beforeClose(): boolean{
    return this.wrongAnswer;
  }


  ngOnInit(){ }

}

export class CustomModalContext extends BSModalContext {
  public venueName: string;
  public groupName: string;
  public groupMembers: any;
}
