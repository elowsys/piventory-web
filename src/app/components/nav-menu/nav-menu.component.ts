import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
  styles: [
    `
    .navbar {
        margin-bottom: 15px;
    }
    `
  ]
})
export class NavMenuComponent implements OnInit {

  showLinks = environment.showNavLinks;
  constructor() { }

  ngOnInit() {
  }

}
