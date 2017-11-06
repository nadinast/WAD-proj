import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserService} from "../../user.service";


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

  constructor(private userService: UserService) { }

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
        (response) => console.log(response),
        (error) => console.log(error));
  }

  onGet(){
    this.userService.getUsers().subscribe(
      (users: any[]) => console.log(users),
      (error) => console.log(error));
  }
}
