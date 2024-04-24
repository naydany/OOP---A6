// console.log("Hello world!");

import { DateTime } from "./dateTime";
import { Booking } from "./booking";
import { BookingStatus } from "./enum";

//  consolelog Date
let dates = new Date();
let date = new DateTime(dates);
let cons = date.getAllDate();

let getStatusBooking =BookingStatus.CANCELLED;

let dateTime = new Booking("200$", cons, getStatusBooking);
console.log(dateTime);

// import { Booking } from "./booking";




// console.log(booking);
