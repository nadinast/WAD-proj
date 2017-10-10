import {Component, OnInit} from '@angular/core';
import {Menu, MenuItem} from "primeng/primeng";

@Component({
  selector: 'ch-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ch';
  items: MenuItem[];
  popupItems: MenuItem[];

  ngOnInit() {
    this.items = [
      {label: 'Home', icon: 'fa-home'},
      {label: 'View Config Files', icon: 'fa-archive'},
      {label: 'Edit Config File', icon: 'fa-edit'},
      {label: 'New Config File', icon: 'fa-file-code-o'}
    ];
    this.popupItems = [
      {label: 'Login', icon: 'fa-sign-in'}
    ];

  }
}
