import {Component, OnInit} from '@angular/core';
import {UserRegisterService} from "./services/userRegister.service";

@Component({
  selector: 'ch-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ch';

  constructor(private usersService: UserRegisterService){

  }

  ngOnInit() {

  }
}
