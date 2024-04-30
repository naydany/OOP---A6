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
import { BookingFlight } from "./bookingFlight";
import { Trip } from "./trip";

// Console log Date
let dates = new Date();
let date = new DateTime(dates);
let cons = date.getAllDate();


// ------ flight ------------
const flight1 = new Flight("ABC123","Phnom Penn", "London", new Date(2024,4,30),new Date(2024,4,2))
const flight2 = new Flight("ABA321","London", "Paris", new Date(2024,4,2),new Date(2024,4,3));

// -------- booking flight ---------
let bookingflight = new BookingFlight();
bookingflight.getAllFlight(flight1);
bookingflight.getAllFlight(flight2);
console.log(bookingflight)

// -------------- booking trip ---------------
let trip = new Trip('Paris',new Date(2024,3,5,7,30,0),new Date(2024,3,21,11,40,5),);
trip.getbookingFlights(bookingflight);
console.log(trip)