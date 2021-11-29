import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LanguageServiceService} from "../../services/language-service.service";
import {map, Observable} from "rxjs";
import {Language} from "../../models/language";
import {Level} from "../../models/level";

@Component({
  selector: 'app-add-language',
  templateUrl: './add-language.component.html',
  styleUrls: ['./add-language.component.scss']
})
export class AddLanguageComponent implements OnInit {

  @Output() onClose = new EventEmitter();
  @Input() level: Level = {parle: '', ecrire: '', comprendre: '',language:'',id:''};
  languages: Language[] = [];
  levels = ['pre-elementaire', 'elementaire', 'courant'];
  test: string[] = [];

  constructor(private languageService: LanguageServiceService) {
  }

  ngOnInit(): void {
    this.languageService.getAllLanguageByuser().pipe(map(res => res.map(
      (res1) => {
        return res1.id
      }
    ))).subscribe(ress => {
      this.test = ress
    });
    this.languageService.getAllLanguage().pipe(map(res => {
      this.languages = res.filter(value => !this.test.includes(<string>value.id));
    })).subscribe();
  }

  setLangage(language: any): void {
    this.level.language = language.nom;
    this.level.id = language.id;
    console.log(this.level);
  }

  setlevel(): void {
    this.languageService.addLanguageByUser(this.level).catch(reason => console.log(reason));
    this.onClose.emit();
  }


}
