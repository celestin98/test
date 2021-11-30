import {Component, OnInit} from '@angular/core';
import {Level} from "../../models/level";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  showModal = false;
  showModalDetail = false;
  leveli: Level = {};
  levelsh: Level = {id: ''};

  constructor() {
  }

  ngOnInit(): void {
  }

  modalClosed(isClosed: any) {
    this.leveli = {id: '', language: '', comprendre: '', parle: '', ecrire: ''}
    this.showModal = !this.showModal;

  }

  modi(level: Level) {
    this.leveli = level;
    this.showModal = !this.showModal;
  }

  showDetail(level: Level) {
    this.levelsh = level;
    this.showModalDetail = !this.showModalDetail;
  }
  closemodal(){
    this.showModalDetail = !this.showModalDetail;
  }

}
