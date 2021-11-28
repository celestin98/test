import { Component, OnInit } from '@angular/core';
import {faGlobe} from "@fortawesome/free-solid-svg-icons/faGlobe";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faGlobe = faGlobe;
  constructor() { }

  ngOnInit(): void {
  }

}
