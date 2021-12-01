import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {OnlineStatusService, OnlineStatusType} from "ngx-online-status";
import {ConnectionService} from "ng-connection-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';
  isConnected = true;
  noInternetConnection: boolean | undefined;

  constructor(
    public translate: TranslateService,
    private connectionService: ConnectionService
  ) {
    this.translate.addLangs(['en-US', 'fr-FR']);
    this.translate.setDefaultLang('fr-FR');
    this.connectionService.monitor().subscribe(isConnected => {
      this.isConnected = isConnected;
      if (this.isConnected) {
        this.noInternetConnection = false;
      } else {
        this.noInternetConnection = true;
      }
    })
    console.log(this.isConnected);

  }
}

