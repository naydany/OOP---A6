// console.log("Hello world!");

import { DateTime } from "./dateTime";
import { Booking } from "./booking";

//  consolelog Date
let dates = new Date();
let date = new DateTime(dates);
let cons = date.getAllDate();

let dateTime = new Booking(200, cons);
console.log(dateTime);