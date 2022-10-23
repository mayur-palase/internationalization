import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'internationalization';
  lang;
  constructor(private translateService: TranslateService) {
    this.lang = localStorage.getItem('lang') || 'en';
    this.translateService.setDefaultLang(this.lang);
    this.translateService.use(this.lang);
  }

  changeLang(event: any): void {
    localStorage.setItem('lang', event.target.value);
    window.location.reload();
  }
}
