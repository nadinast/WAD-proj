import { Component, OnInit } from '@angular/core';
import {Menu, MenuItem} from "primeng/primeng";
import {UserLoginService} from "../services/http/userLogin.service";

@Component({
  selector: 'ch-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css']
})
export class NavigationMenuComponent implements OnInit {

  items: MenuItem[];
  popupItemsVisitor: MenuItem[];
  popupItemsLoggedIn: MenuItem[];

  private crntUser = sessionStorage.getItem('currentUser');

  constructor(private loginService: UserLoginService) { }

  ngOnInit() {
    this.items = [
      {label: 'Home', icon: 'fa-home', routerLink: '/', routerLinkActiveOptions: {exact:true}},
      {label: 'View Config Files', icon: 'fa-archive', routerLink: '/view-files', routerLinkActiveOptions: {exact:true} },
      {label: 'New Config File', icon: 'fa-file-code-o', routerLink: '/new-file', routerLinkActiveOptions: {exact:true} }
    ];
    this.popupItemsVisitor = [
      {label: 'Login', icon: 'fa-sign-in', routerLink:'/login'}
    ];
    this.popupItemsLoggedIn = [
      {label: 'Logout', icon: 'fa-sign-out', command: () => {sessionStorage.clear(); this.loginService.logout().subscribe()}}
    ]

  }

}
