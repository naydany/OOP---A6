import { Booking } from "./booking";
import { BookingFlight } from "./bookingTrip";


export class Trip {
    private departureTrip: BookingFlight[] = [];
    private retureFlights: Booking[] = [];
    constructor(departureTrip: BookingFlight[], retureFlights: Booking[]) {
        this.departureTrip = departureTrip;
        this.retureFlights = retureFlights;
    }
    getDepartureTrip(): BookingFlight[] {
        return this.departureTrip;
    }
    getRetureFlights(): Booking[] {
        return this.retureFlights;
    }
}