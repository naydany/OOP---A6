// import { Address } from "./address";
import { Flight } from "./flight";
import { BookingStatus, TicketType } from "./enum";
import { Ticket } from "./ticket";
import { Trip } from "./trip";


export class BookingFlight {

    private flight: Flight[]=[];
    public ticketType: TicketType;
    private bookingReference: Flight;

    constructor(flight: Flight[],ticketType: TicketType, bookingReference: Flight) {
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

