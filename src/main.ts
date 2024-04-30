// this import for other
import { DateTime } from "./dateTime";
import { Booking } from "./booking";
import { Passenger } from "./passenger";
import { BookingStatus, Meal, SeatType, Gender, TicketType } from "./enum";
import { Address } from "./address";
import { Flight } from "./flight";
import { ScheduleFlight } from "./scheduleFlight";
import { Seats } from "./seats";
import { BookingFlight } from "./bookingTrip";
import { Ticket } from "./ticket";


// Console log Date
let dates = new Date();
let date = new DateTime(dates);
let cons = date.getAllDate();

//  StatusNooking
let getStatusBooking = BookingStatus.CANCELLED;
let getStatusBooking2 = BookingStatus.CONFIRMED;
let Seatype = SeatType.Economy_classic;
let Meal_passenger_sen = [Meal.Vegetarian, Meal.Vegan];

// address
let location = [new Address("Pnom Penh", "Cambodia")];

const passengers1: Passenger[] = [
    new Passenger(2, 'Jane Smith', '01234567', Gender.Male, null, null),
    new Passenger(1, 'Alice Johnson', '09876543', Gender.Female, null, null),
    new Passenger(3, 'Bob Brown', '0234567', Gender.Female, null, null),
];


// -------------------------------------------------schedul of flight------------------------------------------------
// ------flight ABC123 ------------
const flight = new Flight("ABC123", "Phnom Penn", "London", new Date(2024, 4, 30), new Date(2024, 4, 2), passengers1, [])
const dateTime1 = new DateTime("2024-04-25 10:00");
const dateTime2 = new DateTime("2024-04-25 12:00");
const fromAddress = new Address("Pnom Penh", "Cambodia");
const toAddress = new Address("Paris", "French");

//---------flight ABA321 --------------
const flight2 = new Flight("ABA321", "London", "Paris", new Date(2024, 4, 2), new Date(2024, 4, 3), passengers1, []);
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

let seat = new Seats(SeatType.Business_class, 'A2')


// ------------------------------------------------Booking Ticket----------------------------------------

//  booking
const bookingFlightReferences = new BookingFlight(flight, 'Canada', "Singapore", "Gio", TicketType.Return, null);
let BookingTicketPassenger1 = new Booking('200$', 876543, "Cambodia", "doda@gmail.com", getStatusBooking2, Meal_passenger_sen, passengers1[0], null, null, []);
let BookingTicketPassenger_2 = new Booking('500$', 345678, "Finlane", "vanny@gmail.com", getStatusBooking, Meal_passenger_sen, passengers1[1], null, null, [bookingFlightReferences]);


//  ticket 
let Ticket_passenger = new Ticket(Seatype, flight2, [BookingTicketPassenger1], passengers1[0], TicketType.OneWay);
let Ticket_passenger_01 = new Ticket(Seatype, flight, [BookingTicketPassenger_2], passengers1[1], TicketType.Return);
let Ticket_passenger_02 = new Ticket(Seatype, flight2, [BookingTicketPassenger_2], passengers1[2], TicketType.Return);


//  ------------- basic Console  by other ---------------
// console.log(Ticket_passenger)
// ConsoleLog Booking Ticket
// console.log(bookingFlightReferences);




// ------------------------------------USER STORY 2----------------------------------------------------------------------------------
//  As an airline manager, I want to know for a given flight, how many passengers have return tickets.

//  passenger for Return ticket
const passengers: Passenger[] = [
    new Passenger(2, 'Jane Smith', '01234567', Gender.Male, [BookingTicketPassenger_2], [Ticket_passenger_01]),
    new Passenger(0, 'Alice Johnson', '09876543', Gender.Female, [BookingTicketPassenger1], [Ticket_passenger_02]),
    new Passenger(3, 'Bob Brown', '0234567', Gender.Female, [], [Ticket_passenger]),
];

// Adding a ticket for each passenger
// Printing out the tickets for each passenger

passengers[0].addTicket(Ticket_passenger);
console.log(passengers[0].getTickets());


const flight3 = new Flight("ABA321", "London", "Paris", new Date(2024, 4, 2), new Date(2024, 4, 3), passengers, null);
const returnTicketCountPassengers = flight3.getReturnTicketPassengerCount();
const returnTicketDetalPassengers = flight3.getReturnTicketPassengerDetails();
console.log(`an airline manager, I want to know how many passenger have return ticket:`, returnTicketDetalPassengers);
console.log(`Number of passengers with return tickets: ${returnTicketCountPassengers}`);
