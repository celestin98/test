import {Component, OnInit} from '@angular/core';
import {Level} from "../../models/level";
import {faEye} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  showModal = false;
  showModalDetail = false;
  faLook = faEye;
  leveli: Level = {language: '', speak: '', id: '', understand: '', Write: ''};
  levelsh: Level = {language: '', speak: '', id: '', understand: '', Write: ''};

  constructor() {
  }

  ngOnInit(): void {
  }


  addLanguageModal(isClosed: any) {
    this.leveli = {id: '', language: '', understand: '', speak: '', Write: ''}
    this.showModal = !this.showModal;
  }

  modifyLanguageModal(level: Level) {
    this.leveli = level;
    this.showModal = !this.showModal;
  }


  showDetailModal(level: Level) {
    this.levelsh = level;
    this.showModalDetail = !this.showModalDetail;
  }
  closeModal(){
    this.showModalDetail = !this.showModalDetail;
  }

}
