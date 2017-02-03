import { Component }                                from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd }    from '@angular/router';
import 'rxjs/add/operator/filter';
import {log} from "util";

@Component({
    selector: 'breadcrumbs',
    template: `
    <template ngFor let-bread [ngForOf]="breadcrumbsNorm" let-last = last>
        <li class="breadcrumb-item" [ngClass]="{active: last}">
        <a *ngIf="!last" [routerLink]="url[bread]">{{bread}}</a>
        <span *ngIf="last" [routerLink]="url[bread]">{{bread}}</span>
    </template>
  `
})
export class BreadcrumbsComponent {
    breadcrumbs: string[];
    breadcrumbsNorm: string[];
    url: string[];
    constructor(private router:Router, private route:ActivatedRoute) {}
    ngOnInit(): void {
        this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
          this.breadcrumbs = [];
          this.breadcrumbsNorm = [];
          this.url = [];

          this.breadcrumbs = event['urlAfterRedirects'].split("/");
          this.breadcrumbs.shift();

          for(let i=0; i<this.breadcrumbs.length; i++){
            // Normalizing names
            if(this.breadcrumbs[i].indexOf('-') > -1){
              let tmp = this.breadcrumbs[i].split("-");
              let result = '';
              for(let j=0; j<tmp.length; j++){
                tmp[j] = this.capitalizeFirstLetter(tmp[j]);
                result += tmp[j] + ' ';
              }
              this.breadcrumbsNorm[i] = result;
            }else{
              this.breadcrumbsNorm[i] = this.capitalizeFirstLetter(this.breadcrumbs[i]);
            }

            // Getting url
            if(i == 0){
              this.url[this.breadcrumbsNorm[i]] = '/'+this.breadcrumbs[i];
            }else{
              this.url[this.breadcrumbsNorm[i]] = this.url[this.breadcrumbsNorm[i-1]] + '/'+this.breadcrumbs[i];
            }
          }
        })
    }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
