import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserRegisterService} from "../services/http/userRegister.service";
import {UserLoginService} from "../services/http/userLogin.service";
import {Router} from "@angular/router";
import {FileUploadService} from "../services/http/fileUpload.service";

@Component({
  selector: 'ch-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    username: '',
    password: ''
  };

  constructor(private loginService : UserLoginService,
              private cdRef: ChangeDetectorRef,
              private fileService: FileUploadService) { }

  ngOnInit() {
  }

  onSubmit(loginForm: NgForm){
    this.user.username = loginForm.value.username;
    this.user.password = loginForm.value.password;

    this.loginService.login(this.user).subscribe(
      (response) => {
        console.log(response);
        let statusOK = response.ok;
        if(statusOK){
          sessionStorage.setItem('currentUser', response["_body"]);
          this.cdRef.detectChanges();
        }
      },
          (error) => console.log(error)
    );
  }

}
