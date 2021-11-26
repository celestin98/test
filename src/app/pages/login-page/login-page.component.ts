import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router, private route:ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  login(): void {
    this.router.navigate(['items'], { relativeTo: this.route });
  }


}
