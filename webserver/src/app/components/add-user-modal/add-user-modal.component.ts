import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import {FirebaseService, Member} from "../../services/firebase.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-add-user-modal',
  templateUrl: './add-user-modal.component.html',
  styleUrls: ['./add-user-modal.component.scss'],

})
export class AddUserModalComponent implements OnInit, CloseGuard, ModalComponent<CustomModalContext> {

  context: CustomModalContext;
  newMember: Member;
  confirmationMessage: string;
  members: Member[];
  membersId: string[];
  fileList: FileList;

  constructor(public dialog: DialogRef<CustomModalContext>, private firebaseService: FirebaseService,
              private modal: Modal, private router: Router, private ref: ChangeDetectorRef) {

    this.newMember = {name: "", email: "", id: "", photourl: "", groups: []};
    this.context = dialog.context;
    this.context.isBlocking = false;
    this.confirmationMessage = "";
    this.fileList = null;

    this.firebaseService.findMembers(this.context.venueName).subscribe(members => {
      this.membersId = [];
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

      }
    });
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  fileChange(event) {
    this.fileList = event.target.files;
    for(let i=0; i<this.fileList.length; i++){
      let filename = this.fileList[i].name;
      if(filename.split('.').pop() != 'jpg'){
        this.fileList =  null;
        let input = <HTMLInputElement> document.getElementById('input-upload');
        input.value = "";
        this.confirmationMessage = "Don't try to fool me. Use .jpg image only =P";
        break;
      }else{
        this.confirmationMessage = "";
      }

    }
  }

  onKeyUp(value) {
    console.log(this.newMember);
    this.dialog.close();
  }

  addMemberToGroup(member:Member){
    this.modal.confirm()
      .size('sm')
      .isBlocking(true)
      .showClose(true)
      .keyboard(27)
      .title('Attention')
      .body('Do you want to add  '+ member.name+', '+ member.email +' to group ' + this.context.groupName + '?')
      .open()
      .then(dialog => dialog.result)
      .then(result => {
        this.firebaseService.addExistingMemberToGroup(this.context.venueName, this.context.groupName, member);
        this.dialog.close();
      })
      .catch(err => {});


  }

  createNewMember(){
    console.log('create new member: '+this.newMember.name+" "+this.newMember.email);
    this.firebaseService.createAndAddMember(this.context.venueName, this.context.groupName, this.newMember, this.fileList);
  }

  submit(){
    this.newMember.name = this.newMember.name.trim();
    this.newMember.email = this.newMember.email.trim();
    if(this.newMember.name != "" && typeof this.newMember.name != "undefined"
      && this.newMember.email != "" && typeof this.newMember.email != "undefined"
      && this.fileList != null && this.fileList.length > 0){
      if(this.newMember.email.indexOf('@') == -1){
        this.confirmationMessage = "Error: Email not formatted correctly.";
      }else{
        this.createNewMember();
        this.confirmationMessage = this.newMember.name + " successfully added to " + this.context.groupName;
        this.newMember = {name: "", email: "", id: "", photourl: "", groups: []};
        this.dialog.close();


      }

    }else{
      this.confirmationMessage = "Error: Could mot create member because the name or email are blank or no photo were added.";
    }

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
  public groupName: string;
}
