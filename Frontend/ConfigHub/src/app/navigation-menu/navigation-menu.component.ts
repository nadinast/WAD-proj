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
      {label: 'Home', icon: 'fa-home', routerLink: '/', routerLinkActiveOptions: {exact:true}},
      {label: 'View Config Files', icon: 'fa-archive', routerLink: '/view-files', routerLinkActiveOptions: {exact:true} },
      {label: 'New Config File', icon: 'fa-file-code-o', routerLink: '/new-file', routerLinkActiveOptions: {exact:true} }
    ];
    this.popupItems = [
      {label: 'Login', icon: 'fa-sign-in', routerLink:'/login'}
    ];

  }

}
