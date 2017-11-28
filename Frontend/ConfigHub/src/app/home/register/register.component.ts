import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserRegisterService} from "../../services/http/userRegister.service";
import {Router} from "@angular/router";
import {LoginComponent} from "../../login/login.component";


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

  private user : string = "";
  private error : boolean = false;
  private errorMessage : string = "";
  private successMessage : string = "";
  private registered : boolean = false;

  constructor(private userService: UserRegisterService,
              private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
  }

  onSubmit(registerForm: NgForm) {
    this.newUser.username = registerForm.value.username;
    this.newUser.password = registerForm.value.password;
    this.newUser.confirmPassword = registerForm.value.confirmPassword;
    this.newUser.firstName = registerForm.value.firstName;
    this.newUser.lastName = registerForm.value.lastName;
    this.newUser.email = registerForm.value.email;

    this.error = false;

    this.userService.storeUser(this.newUser).subscribe(
        (response) => {
          console.log(response);
          if(response.ok) {
            this.registered = true;
            registerForm.reset();
            this.successMessage = "Welcome to Config Hub " + this.newUser.username + "!";
            console.log(this.newUser.username);
            console.log(this.registered);
            this.cdRef.detectChanges();
          }
          else
            this.registered = false;
        },
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
