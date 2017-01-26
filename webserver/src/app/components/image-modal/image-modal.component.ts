import { Component, OnInit } from '@angular/core';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import {FirebaseService, Member, Group} from "../../services/firebase.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss'],
  providers: [Modal],
})

export class ImageModalComponent implements OnInit, CloseGuard, ModalComponent<CustomModalContext> {

  context: CustomModalContext;

  constructor(public dialog: DialogRef<CustomModalContext>, private firebaseService: FirebaseService,
              private modal: Modal, private router: Router) {

    let content = <HTMLElement> document.getElementsByClassName("modal-content")[0];
    content.style.maxWidth = '300px';

    this.context = dialog.context;
    this.context.isBlocking = true;
    this.context.showClose = true;

    console.log('open');

  }

  closeModal(){
    console.log('close modal');
    this.dialog.close('hey_close');
    this.dialog.dismiss();
  }

  onKeyUp(value) {
    console.log('onkeyup');
    this.dialog.close('hey');
  }

  beforeDismiss(): boolean{
    console.log('before dismiss');
    this.dialog.close('hey_close');
    return false;
  }

  beforeClose(): boolean{
    console.log('beforeclose');
    this.dialog.close('hey_close');
    return true;
  }

  ngOnInit(){ }

}

export class CustomModalContext extends BSModalContext {
  imagePath: string;
}
