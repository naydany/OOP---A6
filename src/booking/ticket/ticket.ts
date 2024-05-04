import { Flight } from "../../airport/trip/flight/flight";
import { Booking } from "../bookingFlight/booking";
import { SeatType, TicketType, } from "../../enum/enum";
import { Passenger } from "../../person/passenger/passenger";
import { BookingFlight } from "../bookingFlight";
import { Seats } from "../../airport/trip/seatLaout/seats";

export class Ticket {
    private flight: Flight;
    private passenger: Passenger;
    private booking: Booking[];
    private seats: Seats;
    public ticketType: TicketType;

    constructor(seats: Seats, flight: Flight, booking: Booking[], passenger: Passenger, ticketType: TicketType) {
        this.seats = seats;
        this.flight = flight;
        this.booking = booking;
        this.passenger = passenger;
        this.ticketType = ticketType;
    }

    getTickets(): TicketType {
        return this.ticketType;
    }
    isReturnTicket() {
        return this.ticketType;
    }


}