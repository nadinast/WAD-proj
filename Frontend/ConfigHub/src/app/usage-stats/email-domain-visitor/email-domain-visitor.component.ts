import { Component, OnInit } from '@angular/core';
import {Visitor} from "../calculation/visitor";
import {FileCalcService} from "../calculation/file-calc.service";
import {UserCalcService} from "../calculation/user-calc.service";
import {StatisticsService} from "../../services/http/statistics.service";
import {UserLoginService} from "../../services/http/userLogin.service";

@Component({
  selector: 'ch-email-domain-visitor',
  templateUrl: './email-domain-visitor.component.html',
  styleUrls: ['../usage.style.css']
})

export class EmailDomainVisitorComponent implements Visitor, OnInit {

  private readonly ERROR_MSG  : string = "Email domain usage not available!";
  private readonly SUCCESS_MSG : string = "Current users using gmail: ";

  private emailDomainUserUsage : string = this.ERROR_MSG;
  private emailDomainFileUsage: string = this.ERROR_MSG;

  constructor(private statsService : StatisticsService) { }

  ngOnInit() {
    this.getCount();
  }

  getCount() : void{
    let userCalcService =  new UserCalcService();
    userCalcService.accept(this);
  }

  calculateFileStats(fileCalcService: FileCalcService): string {
    console.log("Hello files uploaded from an email domain!");
    return this.emailDomainFileUsage;
  }

  calculateUserStats(userCalcService: UserCalcService): string {
    this.statsService.getEmailDomainStats("gmail").subscribe(
      (response) => {
        userCalcService.updateCrntUsers(response["_body"]);
        this.emailDomainUserUsage = this.SUCCESS_MSG + userCalcService.getCrntUsers();
        console.log(this.emailDomainUserUsage);
      },
    (error) => {
        console.log(error);
        this.emailDomainUserUsage = this.ERROR_MSG;
    }
    );
    return this.emailDomainUserUsage;
  }

}
