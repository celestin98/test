import { Component, OnInit } from '@angular/core';
import {faCogs, faEye, faTrash} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-langue-list',
  templateUrl: './langue-list.component.html',
  styleUrls: ['./langue-list.component.scss']
})
export class LangueListComponent implements OnInit {
  faTrash= faTrash
  faConfig= faCogs
  faLook= faEye


  constructor() { }

  ngOnInit(): void {
  }

}
