import { Component, OnInit } from '@angular/core';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import {FirebaseService, Member} from "../../services/firebase.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-group-modal',
  templateUrl: './edit-group-modal.component.html',
  styleUrls: ['./edit-group-modal.component.scss']
})
export class EditGroupModalComponent implements OnInit, CloseGuard, ModalComponent<CustomModalContext> {

  context: CustomModalContext;
  group: any;
  start: string;
  end: string;

  constructor(public dialog: DialogRef<CustomModalContext>, private firebaseService: FirebaseService,
              private modal: Modal, private router: Router) {
    this.context = dialog.context;
    this.context.isBlocking = false;

    this.firebaseService.findGroups(this.context.venueName).subscribe(groups => {
      console.log(groups);
      for(let i=0; i<groups.length; i++){
        if(groups[i].$key == this.context.groupName){
          console.log(groups[i]);
          this.start = groups[i]['Time']['start'];
          this.end = groups[i]['Time']['end'];
        }
      }
    });
  }

  submit(){
    this.firebaseService.editGroup(this.context.groupName, this.context.venueName, this.start, this.end);
    this.dialog.close();
  }

  ngOnInit() {
  }

}

export class CustomModalContext extends BSModalContext {
  public venueName: string;
  public groupName: string;
}
