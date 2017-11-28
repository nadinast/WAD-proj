import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {Router} from "@angular/router";

@Component({
  selector: 'ch-fallback-login',
  templateUrl: './fallback-login.component.html',
  styleUrls: ['./fallback-login.component.css'],
})

export class FallbackLoginComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {

  }

  loginNavigate(){
    this.router.navigate(['login']);
  }


}
