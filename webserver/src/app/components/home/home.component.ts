import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {FirebaseService, Log, UserInfo} from "../../services/firebase.service";
import {StatisticsService} from "../../services/statistics.service";
import {Observable} from "rxjs";
import any = jasmine.any;
import {BSModalContext} from "angular2-modal/plugins/bootstrap";
import {overlayConfigFactory, Modal} from "angular2-modal";
import {ImageModalComponent} from "../image-modal/image-modal.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public barChartDataWeek:any[] = [{data: []},];
  public barChartLabelsWeek:string[] = [];
  public barChartDataMonth:any[] = [{data: []},];
  public barChartLabelsMonth:string[] = [];
  logs: Log[];
  filteredLogs: Log[];
  logPeriod: string;
  searchInput: string;
  userInfo: UserInfo;



  constructor(private firebaseService: FirebaseService, private statisticsService: StatisticsService,
              private ref: ChangeDetectorRef, private modal: Modal){

    this.logPeriod = "day";
    this.searchInput = "";
    this.userInfo = this.firebaseService.getUserInfo();


    this.firebaseService.findLogs().subscribe(logs => {
      this.logs = logs;
      for(let i=0; i<logs.length; i++){
        let tmpurl = this.logs[i].photourl;
        this.logs[i].photourl = "assets/img/loading_profile.png";
        this.logs[i].attemptPhoto = "assets/img/loading_profile.png";
        this.firebaseService.getPhotoUrl(tmpurl).then(url => {
          this.logs[i].photourl = url;
          this.ref.detectChanges();
        });
        console.log(this.logs[i].$key);
        this.firebaseService.getPhotoUrl(this.userInfo.uid+'/Logs/'+this.logs[i].$key+'.jpg').then(url => {
          this.logs[i].attemptPhoto = url;
          this.ref.detectChanges();
        });
      }
      this.filterLogs();
      console.log(this.logs);

      let timer = Observable.timer(300);
      timer.subscribe(x => {
        // Weekly
        let data = this.statisticsService.calculateWeekly();
        this.barChartDataWeek = [
          {data: data.values},
        ];
        this.barChartLabelsWeek = data.labels;

        // Monthly
        data = this.statisticsService.calculateMonthly();
        this.barChartDataMonth = [
          {data: data.values},
        ];
        this.barChartLabelsMonth = data.labels;
      });
    });

  }

  filterLogs(){
    this.filteredLogs = this.logs.filter(log => {
      if(this.logPeriod != 'all') {
        let multiplier: number;
        switch (this.logPeriod) {
          case "day":
            multiplier = 1;
            break;
          case "week":
            multiplier = 7;
            break;
          case "month":
            multiplier = 30;
            break;
        }
        let date = new Date(log.date.year + "-" + log.date.month + "-" + log.date.day + ":" + log.date.time);
        let diffmill = 24 * 60 * 60 * 1000 * multiplier;
        let timeDiff = Date.now() - date.getTime();
        if (timeDiff / diffmill <= 1) {
          return log;
        }
      }else{
        return log;
      }
    }).sort(function(a, b){
      let adate = new Date(a.date.year+"-"+a.date.month+"-"+a.date.day+":"+a.date.time);
      let atime = adate.getTime();
      let bdate = new Date(b.date.year+"-"+b.date.month+"-"+b.date.day+":"+b.date.time);
      let btime = bdate.getTime();
      if(atime > btime){
        return -1;
      }else{
        return 1;
      }

    });
  }

  search(){
    let search = this.searchInput;
    if(typeof search !== "undefined"){
      search = search.trim().toLowerCase();
      this.filterLogs();
      this.filteredLogs = this.filteredLogs.filter(log => {
        if(log.permission.toLowerCase().includes(search) || log.email.toLowerCase().includes(search) ||
          log.name.toLowerCase().includes(search) || log.venue.toLowerCase().includes(search)){
          return log;
        }
      })
    }
  }

  choosePeriod(period: string){
    let dayPeriod = document.getElementById("dayPeriod");
    dayPeriod.className = "btn btn-sm btn-white";
    let weekPeriod = document.getElementById("weekPeriod");
    weekPeriod.className = "btn btn-sm btn-white";
    let monthPeriod = document.getElementById("monthPeriod");
    monthPeriod.className = "btn btn-sm btn-white";
    let allPeriod = document.getElementById("allPeriod");
    allPeriod.className = "btn btn-sm btn-white";

    switch(period){
      case "day":
        this.logPeriod = "day";
        dayPeriod.className += " active";
        break;
      case "week":
        this.logPeriod = "week";
        weekPeriod.className += " active";
        break;
      case "month":
        this.logPeriod = "month";
        monthPeriod.className += " active";
        break;
      case "all":
        this.logPeriod = "all";
        allPeriod.className += " active";
        break;
    }
    this.search();
  }

  getMonth(month: string): string{
    let monthNum = parseInt(month);
    switch (monthNum){
      case 1:
        return "Jan";
      case 2:
        return "Feb";
      case 3:
        return "Mar";
      case 4:
        return "Apr";
      case 5:
        return "May";
      case 6:
        return "Jun";
      case 7:
        return "Jul";
      case 8:
        return "Aug";
      case 9:
        return "Sep";
      case 10:
        return "Oct";
      case 11:
        return "Nov";
      case 12:
        return "Dec";
    }
  }

  getDateString(year:string, month:string, day:string, time:string): string{
    console.log(time);
    console.log(month);
    let date = new Date(year+"-"+month+"-"+day+"T"+time);
    let tmp = date.toDateString();
    console.log(tmp);
    month = tmp.slice(0,4);
    console.log(month);
    let dateString = date.toDateString().slice(7);
    return dateString;
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

  openModal(imagePath: string){
    return this.modal.open(ImageModalComponent, overlayConfigFactory({imagePath: imagePath}, BSModalContext))
      .then((d) => d.result)
      .then((r) => {
      console.log(r);
    }, (error) => { console.log(error); });

  }

  ngOnInit(): void{}
}
