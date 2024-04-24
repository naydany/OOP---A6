// console.log("Hello world!");

import { DateTime } from "./dateTime";
import { Booking } from "./booking";
import { BookingStatus } from "./enum";
import { Address } from "./address";

//  consolelog Date
let dates = new Date();
let date = new DateTime(dates);
let cons = date.getAllDate();

// location
let address = [new Address("Pnom penh", "Cambodia")];

let getStatusBooking =BookingStatus.CANCELLED;

let dateTime = new Booking("200$", cons, getStatusBooking,address);
console.log(dateTime);

// import { Booking } from "./booking";




// console.log(booking);
