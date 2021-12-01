import {Component, OnInit} from '@angular/core';
import {faGlobe} from "@fortawesome/free-solid-svg-icons/faGlobe";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faGlobe = faGlobe;
  currentLanguage = 'fr-FR';
  openLanguageSelector=false;

  constructor(private translate: TranslateService) {
  }

  ngOnInit(): void {
    this.translate.onLangChange.subscribe(
      lang => {
        this.currentLanguage = lang.lang;
      }
    );
  }

}
