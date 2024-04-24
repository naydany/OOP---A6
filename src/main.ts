// console.log("Hello world!");

import { DateTime } from "./dateTime";
import { Booking } from "./booking";
import { BookingStatus, Meal } from "./enum";

//  consolelog Date
let dates = new Date();
let date = new DateTime(dates);
let cons = date.getAllDate();

// Consolelog Booking Flights

//  StatusNooking
let getStatusBooking = BookingStatus.CANCELLED;

//  meals
let MealLunch = [Meal.Dairy_free, Meal.Forth];
let dateTime = new Booking("200$", cons, getStatusBooking, MealLunch);
console.log(dateTime);

