import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-venue-detail',
  templateUrl: './venue-detail.component.html',
  styleUrls: ['./venue-detail.component.scss']
})
export class VenueDetailComponent implements OnInit {

  venue: string;

  constructor(private route: ActivatedRoute){

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.venue = params['id'];
      console.log('venue name: ' + this.venue);
    });
  }

}
