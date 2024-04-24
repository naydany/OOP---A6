// console.log("Hello world!");

import { DateTime } from "./dateTime";
import { Booking } from "./booking";
import { BookingStatus, Meal } from "./enum";
import {Address}from "./address"

//  consolelog Date
let dates = new Date();
let date = new DateTime(dates);
let cons = date.getAllDate();

// Consolelog Booking Flights

//  StatusNooking
let getStatusBooking = BookingStatus.CANCELLED;

// address
let location = [new Address("Pnom Penh", "Cambodia")];

//  meals
let MealLunch = [Meal.Dairy_free, Meal.Forth];
let dateTime = new Booking("200$", cons, getStatusBooking, MealLunch,location);
console.log(dateTime);

