import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserRegisterService} from "../../services/http/userRegister.service";


@Component({
  selector: 'ch-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newUser = {
    firstName: '',
    lastName:'',
    username:'',
    email:'',
    password:'',
    confirmPassword:''
  };

  user : string = "";
  error : boolean = false;
  errorMessage : string = "";

  constructor(private userService: UserRegisterService) { }

  ngOnInit() {
  }

  onSubmit(registerForm: NgForm) {
    this.newUser.username = registerForm.value.username;
    this.newUser.password = registerForm.value.password;
    this.newUser.confirmPassword = registerForm.value.confirmPassword;
    this.newUser.firstName = registerForm.value.firstName;
    this.newUser.lastName = registerForm.value.lastName;
    this.newUser.email = registerForm.value.email;

    this.userService.storeUser(this.newUser).subscribe(
        (response) => {console.log(response)},
        (error) => {
              console.log(error);
              let errorDetails = JSON.parse(error._body);
              if(error.status == 400) {
                console.log(error.status);
                this.error = true;
                this.errorMessage = errorDetails.message;
              }
              else
              this.error = false;
        });
  }

  onGet(username : string){
    this.userService.getUserByUsername(username).subscribe(
      (users: any) => {
        this.user = users.username;
        console.log(this.user);
        },
      (error) => console.log(error)
      );
  }

}
