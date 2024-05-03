
import { Flight } from "../airport/trip/flight/flight";
import { BookingStatus, TicketType } from "../enum/enum";
import { Ticket } from "./ticket/ticket";
import { Trip } from "../airport/trip/trip";


export class BookingFlight {
    private flight: Flight[] = [];
    public ticketType: TicketType;
    private bookingReference: Flight;

    constructor(flight: Flight[], ticketType: TicketType, bookingReference: Flight) {
        this.flight = flight;
        this.ticketType = ticketType;
        this.bookingReference = bookingReference;
    }

    getAllFlight(flight: Flight): void {
        this.flight.push(flight);
    }
    getTickets() {
        return this.flight;
    }


}

