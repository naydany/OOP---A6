import { Flight } from "./flight";
import { Booking } from "./booking";
import { SeatType } from "./enum";
import { Passenger } from "./passenger";
import { Seats } from "./seats";

export class Ticket {
    private seat: Seats;
    private bookings: Booking[] = [];
    private flight: Flight;
    private passenger: string;
    constructor(seat: Seats, flight: Flight, bookings: Booking[], passenger: string) {
        this.seat = seat;
        this.flight = flight;
        this.bookings = bookings;
        this.passenger = passenger;
    }
}
