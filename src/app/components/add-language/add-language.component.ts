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
  @Input() level: Level = {speak: '', Write: '', understand: '', language: '', id: ''};
  languages: Language[] = [];
  levels = ['addLanguageComponent.option1', 'addLanguageComponent.option2', 'addLanguageComponent.option3', 'addLanguageComponent.option4'];
  tempLanguage: string[] = [];

  constructor(private languageService: LanguageServiceService) {
  }

  ngOnInit(): void {
    this.languageService.getAllLanguageByuser().pipe(map(res => res.map(
      (res1) => {
        return res1.payload.doc.id;
      }
    ))).subscribe(ress => {
      this.tempLanguage = ress
    });
    this.languageService.getAllLanguage().pipe(map(actions => {
        actions.filter(
          value => !this.tempLanguage.includes(<string>value.payload.doc.id)
        ).map(a => {
          const nom = a.payload.doc.data()['nom'];
          const id = a.payload.doc.id;
          this.languages.push({id, name: nom})
        });
      }
    )).subscribe();
  }

  setLangage(language: any): void {
    this.level.language = language.name;
    this.level.id = language.id;
  }

  setlevel(): void {
    this.languageService.addLanguageByUser(this.level);
    this.onClose.emit();
  }

  closesa() {
    this.onClose.emit();
  }


}
