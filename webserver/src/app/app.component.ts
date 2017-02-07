import { Component } from '@angular/core';
import {TranslateService} from 'ng2-translate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  constructor(private translate: TranslateService) {
    let languages = ['en', 'pt'];
    translate.addLangs(languages);
    translate.setDefaultLang('en');

    let browserlang = translate.getBrowserLang();
    if(languages.indexOf(browserlang) > -1){
      translate.use(browserlang);
    }else{
      translate.use('en');
    }
  }

  changeLang(lang: string) {
    this.translate.use(lang);
  }
}
