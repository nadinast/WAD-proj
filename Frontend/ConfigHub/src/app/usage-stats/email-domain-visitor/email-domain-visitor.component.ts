import { Component, OnInit } from '@angular/core';
import {Visitor} from "../calculation/visitor";
import {FileCalcService} from "../calculation/file-calc.service";
import {UserCalcService} from "../calculation/user-calc.service";
import {StatisticsService} from "../../services/http/statistics.service";

@Component({
  selector: 'ch-email-domain-visitor',
  templateUrl: './email-domain-visitor.component.html',
  styleUrls: ['./email-domain-visitor.component.css']
})
export class EmailDomainVisitorComponent implements Visitor, OnInit {

  private readonly ERROR_MSG  : string = "Email domain usage not available!";

  private emailDomainUserUsage : string = this.ERROR_MSG;
  private emailDomainFileUsage: string = this.ERROR_MSG;
  private userCalcService =  new UserCalcService();

  constructor(private statsService : StatisticsService) { }

  ngOnInit() {
    this.getCount();
  }

  getCount() : void{
    this.userCalcService.accept(this);
  }

  calculateFileStats(file: FileCalcService): string {
    console.log("Hello files uploaded from an email domain!");
    return this.emailDomainFileUsage;
  }

  calculateUserStats(user: UserCalcService): string {
    this.statsService.getEmailDomainStats("gmail").subscribe(
      (response) => {
        this.emailDomainUserUsage = response["_body"];
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
