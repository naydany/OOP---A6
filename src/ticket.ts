import { Flight } from "./flight";
import { Booking } from "./booking";
import { SeatType, TicketType, } from "./enum";
import { Passenger } from "./passenger";




export class Ticket {
 
    private flight: Flight;
    private passenger: Passenger;
    private booking : Booking[];
    private seats: SeatType;
    public ticketType: TicketType;
    constructor(seats: SeatType, flight: Flight, booking: Booking[], passenger: Passenger, ticketType : TicketType) {
        this.seats = seats;
        this.flight = flight;
        this.booking = booking;
        this.passenger = passenger;
        this.ticketType = ticketType;
    }
}

