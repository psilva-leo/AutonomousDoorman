import { Component, OnInit } from '@angular/core';
import {TestComponent} from "../../test/test.component";
import {overlayConfigFactory, Modal} from "angular2-modal";
import {BSModalContext} from "angular2-modal/plugins/bootstrap";
import {NewVenueComponent} from "../../new-venue/new-venue.component";

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  constructor(private modal: Modal) { }

  openNewVenueModal(){
    return this.modal.open(NewVenueComponent, overlayConfigFactory({}, BSModalContext));
  }

  ngOnInit() {
  }

}
