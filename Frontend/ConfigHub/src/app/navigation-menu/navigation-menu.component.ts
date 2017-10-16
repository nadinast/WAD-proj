import { Component, OnInit } from '@angular/core';
import {Menu, MenuItem} from "primeng/primeng";

@Component({
  selector: 'ch-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css']
})
export class NavigationMenuComponent implements OnInit {
  items: MenuItem[];
  popupItems: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {label: 'Home', icon: 'fa-home'},
      {label: 'View Config Files', icon: 'fa-archive' },
      {label: 'Edit Config File', icon: 'fa-edit'},
      {label: 'New Config File', icon: 'fa-file-code-o'}
    ];
    this.popupItems = [
      {label: 'Login', icon: 'fa-sign-in'}
    ];

  }

}
