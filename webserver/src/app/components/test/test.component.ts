import { Component, OnInit } from '@angular/core';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import {Modal, BSModalContext} from 'angular2-modal/plugins/bootstrap';
import {AddUserModalComponent} from "../add-user-modal/add-user-modal.component";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers: [Modal],
})
export class TestComponent implements OnInit {

  constructor(private modal: Modal){

  }

  onClick() {
    this.modal.alert()
      .size('lg')
      .showClose(true)
      .title('A simple Alert style modal window')
      .body(`
            <h4>Alert is a classic (title/body/footer) 1 button modal window that 
            does not block.</h4>
            <b>Configuration:</b>
            <ul>
                <li>Non blocking (click anywhere outside to dismiss)</li>
                <li>Size large</li>
                <li>Dismissed with default keyboard key (ESC)</li>
                <li>Close wth button click</li>
                <li>HTML content</li>
            </ul>`)
      .open();
  }

  test(){
    console.log('test');
  }

  openCustom() {
    return this.modal.open(AddUserModalComponent,  overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext));
  }
    ngOnInit(): void { }
}
