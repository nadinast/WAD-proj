import {FileCalcService} from "./file-calc.service";
import {UserCalcService} from "./user-calc.service";

export interface Visitor{
  calculateFileStats(file: FileCalcService) : string;
  calculateUserStats(user: UserCalcService) : string;
}
