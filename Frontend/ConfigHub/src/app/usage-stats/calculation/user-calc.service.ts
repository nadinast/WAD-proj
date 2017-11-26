import {Injectable, OnInit} from "@angular/core";
import {Visitor} from "./visitor";
import {Visitable} from "./visitable";

export class UserCalcService implements Visitable{

  private crntUsers : number = 0;

  accept(v: Visitor): string {
    return v.calculateUserStats(this);
  }

  getCrntUsers() : number{
    return this.crntUsers;
  }

  updateCrntUsers(newValue : number): void{
    this.crntUsers = newValue;
  }

}
