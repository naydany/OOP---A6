// import { Address } from "./address";
import { BookingStatus, TicketType } from "./enum";
import { Flight } from "./flight";
import { Ticket } from "./ticket";
import { Trip } from "./trip";

export class BookingFlight {
    private flightNumber: Flight;
    private src_destination: string;
    private departureTo: string;
    private arriveFrom: string;
    public ticketType: TicketType;
    private trip: Trip[] | null;
    private bookingReference: Flight[] | null;
    constructor(flightNumber: Flight, src_destination: string, departureTo: string, arriveFrom: string, ticketType: TicketType, bookingReference: Flight[] | null) {
        this.flightNumber = flightNumber;
        this.src_destination = src_destination;
        this.departureTo = departureTo;
        this.arriveFrom = arriveFrom;
        this.ticketType = ticketType;
        this.bookingReference = bookingReference;
    }

    // addBookingReference(booking: Flight) {
    //     if (!this.bookingReference) {
    //         this.bookingReference = [];
    //     }
    //     this.bookingReference.push(booking);
    // }
}
