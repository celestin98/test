import { Component, OnInit } from '@angular/core';
import {LanguageServiceService} from "../../services/language-service.service";
import {map, Observable} from "rxjs";
import {Language} from "../../models/language";

@Component({
  selector: 'app-add-language',
  templateUrl: './add-language.component.html',
  styleUrls: ['./add-language.component.scss']
})
export class AddLanguageComponent implements OnInit {
  public language=null;

  constructor(private languageService: LanguageServiceService) {
  }

  ngOnInit(): void {
    this.languageService.getAllLanguage().pipe(map(res=> res.p)).subscribe(temperature => console.log(temperature));

  }

}
