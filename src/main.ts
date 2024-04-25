import { DateTime } from "./dateTime";
import { Booking } from "./booking";
import { BookingStatus, Meal, SeatType, Gender } from "./enum";
import { Passenger } from "./passenger";
import { Ticket } from "./ticket";
import { Flight } from "./flight";

// Console log Date
let dates = new Date();
let date = new DateTime(dates);
let cons = date.getAllDate();
// console.log(cons);

// Console log Booking Flights
let getStatusBooking = BookingStatus.CANCELLED;
// Create Passenger objects
const passenger1 = new Passenger("hi ko",'0987654' , Gender.Male);
const passenger2 = new Passenger("jk kl", '0123456',Gender.Female);

// console.log(passengers1);

let mealBooking = [Meal.Halal_Kosher, Meal.Vegetarian];
let dateTimeBooking1 = new Booking("200$", cons, getStatusBooking, mealBooking, passenger2,"gmail@gmail.com",'Canbodia', 6859403);
// console.log(dateTimeBooking1);

let getStatusBooking2 = BookingStatus.CONFIRMED;
let dateTimeBooking2 = new Booking("500$", cons, getStatusBooking2, mealBooking, passenger1,"van@gmail.com",'Canada',7890543);
// console.log(dateTimeBooking2);

// Console log Ticket
let flightBooking = new Flight("IANW1000");
let Seatype = SeatType.Business_classic;
const TICKET = new Ticket(Seatype, flightBooking, [dateTimeBooking2], passenger1.getName());

passenger1.addTicket(TICKET);

console.log(TICKET);
