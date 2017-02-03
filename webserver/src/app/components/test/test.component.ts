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

  constructor(public dialog: DialogRef<CustomModalContext>, private firebaseService: FirebaseService,
              private modal: Modal, private router: Router) {

    let content = <HTMLElement> document.getElementsByClassName("modal-content")[0];
    content.style.maxWidth = '300px';

    this.context = dialog.context;
    this.context.isBlocking = false;
    this.context.showClose = true;



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

export class CustomModalContext extends BSModalContext {
  imagePath: string;
}
