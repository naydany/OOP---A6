import { Flight } from "./flight";
import { Booking } from "./booking";
import { SeatType } from "./enum";
import { Passenger } from "./passenger";

export class Ticket {
    private seatType: SeatType;
    private bookings: Booking[] = [];
    private flight: Flight;
    private passenger: string;
    constructor(seatType: SeatType, flight: Flight, bookings: Booking[], passenger: string) {
        this.seatType = seatType;
        this.flight = flight;
        this.bookings = bookings;
        this.passenger = passenger;
    }
}
