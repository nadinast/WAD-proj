import {FileCalcService} from "./file-calc.service";
import {UserCalcService} from "./user-calc.service";

export interface Visitor{
  calculateFileStats(fileCalcService: FileCalcService) : string;
  calculateUserStats(userCalcService: UserCalcService) : string;
}
