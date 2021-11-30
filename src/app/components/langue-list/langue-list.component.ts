import {Component, Input, OnInit, Output} from '@angular/core';
import {faCogs, faEye, faTrash} from "@fortawesome/free-solid-svg-icons";
import {EventEmitter} from "@angular/core";
import {LanguageServiceService} from "../../services/language-service.service";
import {map} from "rxjs";
import {Level} from "../../models/level";


@Component({
  selector: 'app-langue-list',
  templateUrl: './langue-list.component.html',
  styleUrls: ['./langue-list.component.scss']
})
export class LangueListComponent implements OnInit {
  faTrash = faTrash
  faConfig = faCogs
  faLook = faEye
  levels: Level[] = [];
  @Input() selectlevel: Level = {};
  @Output() newItemEvent = new EventEmitter();
  @Output() levelemit: EventEmitter<Level> = new EventEmitter<Level>();
  @Output() levelEventEmitter: EventEmitter<Level> = new EventEmitter<Level>();


  constructor(private languageService: LanguageServiceService) {
  }

  ngOnInit(): void {
    this.languageService.getAllLanguageByuser().pipe(map(res => this.levels = res
    )).subscribe(temperature => console.log(this.levels));
  }

  showAddLanguage() {
    this.newItemEvent.emit();
  }

  deleteLanguage(level: Level) {
    this.languageService.deleteLanguageUser(level).catch(
      reason => console.log(reason)
    )
  }

  modifiedlanguage(level: Level) {
    this.levelemit.emit(level);
  }

  showdetail(level: Level) {
    this.levelEventEmitter.emit(level)
  }

}
