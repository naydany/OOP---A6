// console.log("Hello world!");

import { DateTime } from "./dateTime";
import { Booking } from "./booking";
import { BookingStatus, Meal, SeatType } from "./enum";

//  consolelog Date
let dates = new Date();
let date = new DateTime(dates);
let cons = date.getAllDate();

// Consolelog Booking Flights

//  StatusNooking
let getStatusBooking = BookingStatus.CANCELLED;

//seatType
let getSeatType = SeatType.Economy_classic;

//  meals
let MealLunch = [Meal.Dairy_free, Meal.Forth];
let dateTime = new Booking("200$", cons, getStatusBooking, MealLunch, getSeatType );
console.log(dateTime);


