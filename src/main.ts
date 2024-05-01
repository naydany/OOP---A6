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
import {Pilot} from "./pilot";
import { Gate } from "./gate";
import {Airoplane} from "./airoplane";
 
import { BookingFlight } from "./bookingFlight";
import { Trip } from "./trip";
import { TripDetail } from "./tripDetail";
import { Baggage } from "./baggage";

// Console log Date
let dates = new Date();
let date = new DateTime(dates);
let cons = date.getAllDate();


// ------ flight ------------
const flightA = new Flight("ABC123", new DateTime("2024-04-25 10:00"),new DateTime("2024-04-25 10:00"),"Phnom Penn", "London")
const flightB = new Flight("ABA321", new DateTime("2024-04-25 10:00"),new DateTime("2024-04-25 10:00"),"London", "Paris");

// -------- booking flight ---------
let bookingflight = new BookingFlight();
bookingflight.addAllFlight(flightA);
bookingflight.addAllFlight(flightB);


// -------------- booking trip ---------------
let trip = new Trip('Paris',new Date(2024,3,5,7,30,0),new Date(2024,3,21,11,40,5));
trip.getbookingFlights(bookingflight);
console.log(trip)


// Console log Ticket
let flightBooking = new Flight("ABC123",new DateTime("2024-04-25 10:00"),new DateTime("2024-04-25 10:00"),"","");
let Seatype = SeatType.Economy_classic;

// address
let location = [new Address("Pnom Penh", "Cambodia")];


// schedul of flight
// ------ flight ABC123 ------------
const flight = new Flight("ABC123",new DateTime("2024-04-25 10:00"),new DateTime("2024-04-25 10:00"),"","");
const dateTime1 = new DateTime("2024-04-25 10:00");
const dateTime2 = new DateTime("2024-04-25 12:00");
const fromAddress = new Address("Pnom Penh", "Cambodia");
const toAddress = new Address("Paris", "French");

//---------flight ABA321 --------------
const flight2 = new Flight("ABC123",new DateTime("2024-04-25 10:00"),new DateTime("2024-04-25 10:00"),"","");
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
);
const scheduleFlight2 = new ScheduleFlight(
    flight,
    [dateTime3],
    [fromAddress],
    [toAddress],
)


// Create instances of Flight for the pilot's flights ----------------------------------------------------------------
const flight1 = new Flight("FL123", dateTime1, dateTime2, "Origin City 1", "Destination City 1");
const flight3 = new Flight("FL456", dateTime3, dateTime4, "Origin City 2", "Destination City 2");

// Create an array of flights for the pilot
const pilotFlights = [flight1, flight2];

// Create an instance of Pilot
const pilot = new Pilot(5000, "P001", "John Rak", "123-456-7890", Gender.Male, pilotFlights);

// Access the pilot's flights
const flights = pilot.getFlights();
// console.log('Pilot-Schedule',flights);

// gate for into the plane ---------------------------------------------------------------------------------------------
const gate1 = new Gate("A1", "Paris");
const gate2 = new Gate("B3", "London");

const plane1 = new Airoplane("ABC123", gate1);
const plane2 = new Airoplane("XYZ789", gate2);

// plane1.displayPlaneInfo();
// plane2.displayPlaneInfo();

const destination = plane1.getDestination();
// console.log(`Your plane is waiting at Gate ${plane1.gate.gateNumber} for the destination: ${destination}`);


// ------- Trip Detail --------
const passenger1 =new Passenger('1','da','+855 12 989 8877',Gender.Female);
const passenger2 =new Passenger('1','ny','+855 97 989 8877',Gender.Male);
const baggage1 = new Baggage('S3','22kg')
const baggage2 = new Baggage('H3','32kg')
const tripdetail = new TripDetail()
tripdetail.addPassenger(passenger1);
tripdetail.addPassenger(passenger2);
tripdetail.addFlight(flightA);
tripdetail.addFlight(flightB);
tripdetail.addBaggage(baggage1);
tripdetail.addBaggage(baggage2);
console.log(tripdetail)