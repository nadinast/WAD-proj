import {Injectable, OnInit} from "@angular/core";
import {Visitor} from "./visitor";
import {Visitable} from "./visitable";

export class UserCalcService implements Visitable{

  accept(v: Visitor): string {
    return v.calculateUserStats(this);
  }

}
