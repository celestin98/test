import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-select-language',
  templateUrl: './select-language.component.html',
  styleUrls: ['./select-language.component.scss']
})
export class SelectLAnguageComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
  }

  setlanguage(language:string):void{
    this.translate.use(language);
  }

}
