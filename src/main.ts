// this import for other
import { DateTime } from "./dateTime";
import { Booking } from "./booking";
import { BookingStatus, Meal } from "./enum";
import { Address } from "./address";
import { Flight } from "./flight";
import { ScheduleFlight } from "./scheduleFlight";

//  consolelog Date
let dates = new Date();
let date = new DateTime(dates);
let cons = date.getAllDate();

//  StatusNooking
let getStatusBooking = BookingStatus.CANCELLED;

// address
let location = [new Address("Pnom Penh", "Cambodia")];

// schedul of flight
// ------ flight ABC123 ------------
const flight = new Flight("ABC123",);
const dateTime1 = new DateTime("2024-04-25 10:00");
const dateTime2 = new DateTime("2024-04-25 12:00");
const fromAddress = new Address("Pnom Penh", "Cambodia");
const toAddress = new Address("Paris", "French");

//---------flight ABA321 --------------
const flight2 = new Flight("ABA321");
const dateTime3 = new DateTime("2024-04-25 12:00");
const dateTime4 = new DateTime("2024-04-26 5:00");
const fromAddress1 = new Address("Pnom Penh", "Cambodia");
const toAddress2 = new Address("Paris", "French")

// Create an instance of ScheduleFlight
const scheduleFlight = new ScheduleFlight(
    flight,
    [dateTime1],
    [fromAddress],
    [toAddress],
    [dateTime1],
    [dateTime2]
);
const scheduleFlight2 = new ScheduleFlight(
    flight,
    [dateTime3],
    [fromAddress],
    [toAddress],
    [dateTime3],
    [dateTime4]
)

//  meals
let MealLunch = [Meal.Dairy_free, Meal.Forth];
let dateTime = new Booking("200$", cons, getStatusBooking, MealLunch, location, [scheduleFlight]);
console.log(dateTime);

// Access the flight schedule
// console.log(scheduleFlight);
// console.log(scheduleFlight2);

