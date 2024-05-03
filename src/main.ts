// this import for other
import { DateTime } from "./airport/dateTime/dateTime";
import { Booking } from "./booking/bookingFlight/booking";
import { Passenger } from "./person/passenger/passenger";
import { BookingStatus, Meal, SeatType, Gender, JobCategory, TicketType, Economy_classic, Economy_flex, Business_class } from "./enum/enum";
import { Address } from "./airport/trip/route/address";
import { Flight } from "./airport/trip/flight/flight";
import { ScheduleFlight } from "./airport/trip/flight/scheduleFlght/scheduleFlight";
import { Seats } from "./airport/trip/seatLaout/seats";
import { Pilot } from "./person/employee/pilot/pilot";
import { Gate } from "./airport/gate/gate";
import { BookingFlight } from "./booking/bookingFlight";
import { Trip } from "./airport/trip/trip";
import { TripDetail } from "./airport/trip/tripDetail/tripDetail";
import { Baggage } from "./booking/baggage/baggage";
import { Employee } from "./person/employee/employee";
import { Ticket } from "./booking/ticket/ticket";
import { Airoplane } from "./airport/trip/airplan/airoplane";
import { Airport } from "./airport/airport";
import { Airline } from "./airport/airline/airline";
import { Payment } from "./booking/payment/payment";
import { Route } from "./airport/trip/route/route";


// Console log Date
let dates = new Date();
let date = new DateTime(dates);
let cons = date.getAllDate();


// ------ route -------------------
let routeA = new Route('Phnom Penn', "London", "2000km");
let routeB = new Route('London', "Paris", "3000km");


// ------ flight ------------
const flightA = new Flight("ABC123", new DateTime("2024-04-25 10:00"), new DateTime("2024-04-25 10:00"), routeA, [], null)
const flightB = new Flight("ABA321", new DateTime("2024-04-25 10:00"), new DateTime("2024-04-25 10:00"), routeB, [], null);

console.log(flightA);

// -------- booking flight ---------
let bookingflight = new BookingFlight([flightA], TicketType.OneWay, null);
bookingflight.getAllFlight(flightA);
bookingflight.getAllFlight(flightB);
// console.log(bookingflight)

// -------------- booking trip ---------------
let trip = new Trip('Paris', new Date(2024, 3, 5, 7, 30, 0), new Date(2024, 3, 21, 11, 40, 5), bookingflight);
// console.log(trip)


// ----------------- seats --------------
let seat = new Seats(SeatType.Economy_flex, Economy_flex.B2);


// Console log Ticket
// let flightBooking = new Flight("ABC123", new DateTime("2024-04-25 10:00"), new DateTime("2024-04-25 10:00"), "", "",[],null);
//  StatusNooking
let getStatusBooking = BookingStatus.CANCELLED;
let getStatusBooking2 = BookingStatus.CONFIRMED;
let Seatype = SeatType.Economy_classic;
let Meal_passenger_sen = [Meal.Vegetarian, Meal.Vegan];
let Meal_passenger_sen1 = [Meal.Forth, Meal.Dairy_free];

// ------ address ------
let location = [new Address("Pnom Penh", "Cambodia")];

const passengers1: Passenger[] = [
  new Passenger(2, 'Jane Smith', '01234567', Gender.Male),
  new Passenger(1, 'Alice Johnson', '09876543', Gender.Female),
  new Passenger(3, 'Bob Brown', '0234567', Gender.Female),
];

// schedul of flight

// -------------------------------------------------schedul of flight------------------------------------------------
// ------flight ABC123 ------------
const routeC = new Route('', '', '');
const routeD = new Route('', '', '');
const flight = new Flight("ABC123", new DateTime("2024-04-25 10:00"), new DateTime("2024-04-25 10:00"), routeC, [], null);

const dateTime1 = new DateTime("2024-04-25 10:00");
const dateTime2 = new DateTime("2024-04-25 12:00");
const fromAddress = new Address("Pnom Penh", "Cambodia");
const toAddress = new Address("Paris", "French");

//---------flight ABA321 --------------
const flight2 = new Flight("ABC123", new DateTime("2024-04-25 10:00"), new DateTime("2024-04-25 10:00"), routeD, null, null);
const dateTime3 = new DateTime("2024-04-25 12:00");
const dateTime4 = new DateTime("2024-04-26 5:00");
const fromAddress1 = new Address("Pnom Penh", "Cambodia");
const toAddress2 = new Address("Paris", "French")

// -----Create an instance of ScheduleFlight ------
const scheduleFlight = new ScheduleFlight(
  flight,
  [dateTime1],
  [fromAddress],
  [toAddress],
);
const scheduleFlight2 = new ScheduleFlight(
  flight,
  [dateTime3],
  [fromAddress],
  [toAddress],
)


// Create instances of Flight for the pilot's flights ----------------------------------------------------------------
const route01 = new Route("Origin City 1", "Destination City 1", "100km");
const route02 = new Route("Origin City 2", "Destination City 2", "200km");
const flight1 = new Flight("FL123", dateTime1, dateTime2, route01, passengers1, null);
const flight3 = new Flight("FL456", dateTime3, dateTime4, route02, passengers1, null);

// Create an array of flights for the pilot
const pilotFlights = [flight1, flight2];

// Create an instance of Pilot
const pilot = new Pilot(5000, "P001", "John Rak", "123-456-7890", Gender.Male, pilotFlights, JobCategory.pilot);

// Access the pilot's flights
const flights = pilot.getFlights();
// console.log('Pilot-Schedule',flights);

// gate for into the plane ---------------------------------------------------------------------------------------------
const gate1 = new Gate("A1", "Paris");
const gate2 = new Gate("B3", "London");



// ------------------------------------------------Booking Ticket----------------------------------------

//   PaymentBooking
let paymentBooking_01 = new Payment('1', "400");
let paymentBooking_02 = new Payment('2', "500");

//  booking
const bookingFlightReferences = new BookingFlight([flight], TicketType.Return, null);
let BookingTicketPassenger1 = new Booking('200$', 876543, "Cambodia", "doda@gmail.com", getStatusBooking2, Meal_passenger_sen, passengers1[0], null, null, []);
let BookingTicketPassenger_2 = new Booking('500$', 345678, "Finlane", "vanny@gmail.com", getStatusBooking, Meal_passenger_sen1, passengers1[1], null, null, [bookingFlightReferences]);
BookingTicketPassenger1.addPayment(paymentBooking_02);

// BookingTicketPassenger1.addPayment(paymentBooking_01);
//  passenger Booking ticket 
console.log(BookingTicketPassenger1);


// ------------------------------------USER STURY 7 (meal type of flight)------------------------------------------------
let meal1 = BookingTicketPassenger1.getMeal();
let meal2 = BookingTicketPassenger_2.getMeal();

let manyMeal = [];
manyMeal.push(meal1, meal2);

// const airport2 = new Airport('Phnom Penh International Airport');
const route1 = new Route("Origin City 1", "Destination City 1", "5000km")
// route1.addAirport(airport2)
// console.log(route1)
const flightl = new Flight("FL123", dateTime1, dateTime2, route1, passengers1, manyMeal,);

let mealType = flightl.getMeal();
// console.log(mealType);


//-------------------------------USER STORY 6 (gate for waiting)---------------------------------
const plane1 = new Airoplane("ABC123", gate1);
const plane2 = new Airoplane("XYZ789", gate2);

//  console Plane
// plane1.displayPlaneInfo();
// plane2.displayPlaneInfo();

const destination = plane1.getDestination();
// console.log(`Your plane is waiting at Gate ${plane1.gate.gateNumber} for the destination: ${destination}`);


// ------- Trip Detail --------
const passenger1 = new Passenger('1', 'da', '+855 12 989 8877', Gender.Female);
const passenger2 = new Passenger('1', 'ny', '+855 97 989 8877', Gender.Male);
const baggage1 = new Baggage('S3', '22kg')
const baggage2 = new Baggage('H3', '32kg')
const tripdetail = new TripDetail()
tripdetail.addPassenger(passenger1);
tripdetail.addPassenger(passenger2);
tripdetail.addFlight(flightA);
tripdetail.addFlight(flightB);
tripdetail.addBaggage(baggage1);
tripdetail.addBaggage(baggage2);
// console.log(tripdetail)


// -------------------------------------------USER STORY 5 (total of all emplyee) ------------------------------
const employees = [
  new Employee(6000, "1", "John Doe", "1234567890", Gender.Male, JobCategory.crew),
  new Employee(10000, "2", "Jane Smith", "9876543210", Gender.Female, JobCategory.pilot),
  new Employee(8000, "3", "David Johnson", "5555555555", Gender.Male, JobCategory.co_pilot),
  new Employee(12000, "4", "Emily Davis", "1112223334", Gender.Female, JobCategory.airportManager),
  new Employee(5000, "5", "Michael Brown", "4445556667", Gender.Male, JobCategory.chef),
  new Employee(9000, "6", "Sarah Wilson", "8889990001", Gender.Female, JobCategory.airportManager),
  new Employee(11000, "6", "Sarah Wilson", "8889990001", Gender.Male, JobCategory.airlineController),
  new Employee(4000, "7", "Robert Lee", "7778889990", Gender.Male, JobCategory.baggageHandler),

];


// ------------- Airline Controller -----------------
const airlinecontroller = employees[6].addTripDetail;
// console.log(airlinecontroller)


// Retrieve the salary by position 
function getSalaryByPosition(jobCategory: JobCategory): number {
  let totalSalaryByPosition = 0;
  let totalSalaryAllPosition = 0;

  for (const employee of employees) {
    if (employee.getPosition() === jobCategory) {
      totalSalaryByPosition += employee.getSalary();
    }
    // console.log(`Salary of ${employee.getName()}: ${employee.getSalary()}$ position: ${employee.getPosition()}`);
    totalSalaryAllPosition += employee.getSalary();
  }
  // console.log(`Total salary of all employees per month is : ${totalSalaryAllPosition}$`);
  return totalSalaryByPosition;
}
//  Retrieve the total salary for the position
const salaryOfPosition = getSalaryByPosition(JobCategory.pilot);
// console.log(`Total salary for the ${JobCategory.pilot} per month is: ${salaryOfPosition}$`);

// ------------------------------------------------Booking Ticket----------------------------------------

// //  booking
// const bookingFlightReferences = new BookingFlight([flight], TicketType.Return, null);
// let BookingTicketPassenger1 = new Booking('200$', 876543, "Cambodia", "doda@gmail.com", getStatusBooking2, Meal_passenger_sen, passengers1[0], null, null, []);
// let BookingTicketPassenger_2 = new Booking('500$', 345678, "Finlane", "vanny@gmail.com", getStatusBooking, Meal_passenger_sen, passengers1[1], null, null, [bookingFlightReferences]);


//  ticket 
let Ticket_passenger = new Ticket(Seatype, flight2, [BookingTicketPassenger1], passengers1[0], TicketType.OneWay);
let Ticket_passenger_01 = new Ticket(Seatype, flight, [BookingTicketPassenger_2], passengers1[1], TicketType.Return);
let Ticket_passenger_02 = new Ticket(Seatype, flight2, [BookingTicketPassenger_2], passengers1[2], TicketType.Return);
let Ticket_passenger_03 = new Ticket(Seatype, flight2, [BookingTicketPassenger_2], passengers1[3], TicketType.OneWay);

//  ticket that had been booking already
// console.log(Ticket_passenger_01);


//  ------------- basic Console  by other ---------------
// console.log(Ticket_passenger)
// ConsoleLog Booking Ticket
// console.log(bookingFlightReferences);



// ------------------------------------USER STORY 2----------------------------------------------------------------------------------
//  As an airline manager, I want to know for a given flight, how many passengers have return tickets.

//  passenger for Return ticket
const passengers: Passenger[] = [
  new Passenger(2, 'Jane Smith', '01234567', Gender.Male),
  new Passenger(0, 'Alice Johnson', '09876543', Gender.Female),
  new Passenger(3, 'Bob Brown', '0234567', Gender.Female),
  new Passenger(5, 'Bob Brown', '0234567', Gender.Female),
];

// Adding a ticket for each passenger
// Printing out the tickets for each passenger
passengers[0].addTicket(Ticket_passenger);
// passengers[0].getTickets();

//  if you want to buy ticket return
passengers[1].addTicket(Ticket_passenger_01);
passengers[2].addTicket(Ticket_passenger_02);
passengers[3].addTicket(Ticket_passenger_03);



// Get return ticket count and details for passenger1 and passenger2 (optional)
const route_01 = new Route("Origin City 1", "Destination City 1", "10000km")
const flight_01 = new Flight("FL123", dateTime1, dateTime2, route_01, passengers, manyMeal);
// console.log(flight_01)
const passengersWithReturnTicketsCount = flight_01.getPassengersWithReturnTicketsCount();
const passengerWithReturnTicketsDetals = flight_01.getPassengersWithReturnTicketsDetail();


//  final console Of Airline Manager want to know about the return tickets
//  __________________________details for passenger return tickets_________________________

console.log("Airline Manager want to know passenger have ticket return", passengersWithReturnTicketsCount);
//  __________________________number of return tickets______________________________________
console.log(`Informtion detail`, passengerWithReturnTicketsDetals);



// -------- Airline --------
const airline = new Airline('Cambodia Angkor Air', 'k6');
airline.addFlight(flightA);
airline.addFlight(flightB);

// -------AirPort ----
const airport1 = new Airport('Phnom Penh International Airport');
// const airport2 = new Airport('Phnom Penh International Airport')
airport1.addGate(gate1)
airport1.addGate(gate2)
airport1.addAirline(airline)
// console.log(airport1)

// ----------------------------------------------------------------------------------------------

