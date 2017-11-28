import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {UserLoginService} from "../services/http/userLogin.service";

@Component({
  selector: 'ch-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private loginService : UserLoginService,
              private cdRef: ChangeDetectorRef) { }

  private crntUser : string  = sessionStorage.getItem('currentUser');

  ngOnInit() {

  }

  logout() : void{
    sessionStorage.removeItem('currentUser');
    this.cdRef.markForCheck();
    this.loginService.logout().subscribe(
      (response) => {
        console.log(response);
      },
          (error) => console.log(error)
    );
  }

}
