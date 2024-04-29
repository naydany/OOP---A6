import { Ticket } from "./ticket";

// this import for other
import { DateTime } from "./dateTime";
import { Booking } from "./booking";
import { Passenger } from "./passenger";
import { BookingStatus, Meal, SeatType, Gender } from "./enum";
import { Address } from "./address";
import { Flight } from "./flight";
import { ScheduleFlight } from "./scheduleFlight";
import { Seats } from "./seats";

// Console log Date
let dates = new Date();
let date = new DateTime(dates);
let cons = date.getAllDate();

//  StatusNooking
let getStatusBooking = BookingStatus.CANCELLED;

// Create Passenger objects
const passenger2 = new Passenger("jk kl", '0123456', Gender.Female);

let mealBooking = [Meal.Halal_Kosher, Meal.Vegetarian];
let getStatusBooking2 = BookingStatus.CONFIRMED;

// Console log Ticket
// let flightBooking = new Flight("IANW1000");
let Seatype = SeatType.Economy_classic;

// address
let location = [new Address("Pnom Penh", "Cambodia")];


// schedul of flight
// ------ flight ABC123 ------------
const flight = new Flight("ABC123","Phnom Penn", "London", new Date(2024,4,30),new Date(2024,4,2))
const dateTime1 = new DateTime("2024-04-25 10:00");
const dateTime2 = new DateTime("2024-04-25 12:00");
const fromAddress = new Address("Pnom Penh", "Cambodia");
const toAddress = new Address("Paris", "French");

//---------flight ABA321 --------------
const flight2 = new Flight("ABA321","London", "Paris", new Date(2024,4,2),new Date(2024,4,3));
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

// let dateTimeBooking2 = new Booking("500$", getStatusBooking2, mealBooking, location, [scheduleFlight], passenger2, "van@gmail.com", 'Canada');
// const TICKET = new Ticket(Seatype, flightBooking, [dateTimeBooking2], passenger2.getName());

// passenger2.addTicket(TICKET);

// console.log(TICKET);


// Access the flight schedule
// console.log(scheduleFlight);
console.log(scheduleFlight2);

let seat = new Seats(SeatType.Business_class,'A2')


