import { Component, OnInit } from '@angular/core';
import {FirebaseService, Log, Member} from "../../services/firebase.service";
import {StatisticsService} from "../../services/statistics.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public barChartData:any[] = [
    {data: []},
  ];
  public barChartLabels:string[] = [];
  logs: Log[];

  constructor(private firebaseService: FirebaseService, private statisticsService: StatisticsService){

    this.firebaseService.findLogs().subscribe(logs => {
      this.logs = logs;
      console.log(this.logs);

      let timer = Observable.timer(300);
      timer.subscribe(x => {
        let data = this.statisticsService.calculateWeekly();
        console.log(data);
        this.barChartData = [
          {data: data.values},
        ];
        this.barChartLabels = data.labels;
      });

    });

  }

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scaleStepWidth: 1,
  };

  public barChartType:string = 'bar';
  public barChartLegend:boolean = false;

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  ngOnInit(): void{ }
}
