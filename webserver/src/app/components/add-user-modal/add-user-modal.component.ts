import { Component, OnInit } from '@angular/core';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';

@Component({
  selector: 'app-add-user-modal',
  templateUrl: './add-user-modal.component.html',
  styleUrls: ['./add-user-modal.component.scss'],

})
export class AddUserModalComponent implements OnInit, CloseGuard, ModalComponent<CustomModalContext> {

  context: CustomModalContext;

  public wrongAnswer: boolean;
  newMember: {name: string, email: string};

  constructor(public dialog: DialogRef<CustomModalContext>) {
    this.newMember = {name: "", email: ""};
    this.context = dialog.context;
    this.wrongAnswer = true;
  }

  onKeyUp(value) {
    console.log(this.newMember);
    this.dialog.close();
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
  public num1: number;
  public num2: number;
}
