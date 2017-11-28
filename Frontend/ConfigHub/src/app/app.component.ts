import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserRegisterService} from "./services/http/userRegister.service";
import {UserCalcService} from "./usage-stats/calculation/user-calc.service";
import {UserLoginService} from "./services/http/userLogin.service";

@Component({
  selector: 'ch-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{

  title = 'ch';

  constructor(){

  }

  ngOnInit() {

  }

  ngOnDestroy(): void {
    sessionStorage.removeItem('currentUser');
  }
}
