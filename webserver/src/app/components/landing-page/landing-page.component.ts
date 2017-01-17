import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {

  constructor(){

    // Stylesheed
    let link = document.createElement("link");
    link.href = "assets/backyard/css/bootstrap.min.css";
    link.rel = "stylesheet";
    link.media = "screen";
    document.head.appendChild(link);

    link = document.createElement("link");
    link.href = "assets/backyard/css/font-awesome.min.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    link = document.createElement("link");
    link.href = "assets/backyard/fonts/icon-7-stroke/css/pe-icon-7-stroke.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    link = document.createElement("link");
    link.href = "assets/backyard/css/animate.css";
    link.media = "screen";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    link = document.createElement("link");
    link.href = "assets/backyard/css/owl.theme.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    link = document.createElement("link");
    link.href = "assets/backyard/css/owl.carousel.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    link = document.createElement("link");
    link.href = "assets/backyard/css/css-index.css";
    link.media = "screen";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    link = document.createElement("link");
    link.href = "http://fonts.googleapis.com/css?family=Lato:100,300,400,700,900,100italic,300italic,400italic,700italic,900italic";
    link.rel = "stylesheet";
    document.head.appendChild(link);

  }

  ngOnInit(){ }

}
