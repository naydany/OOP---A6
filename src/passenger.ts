import { Person } from "./person";
import { Gender, TicketType } from "./enum";
import { Booking } from "./booking";
import { Ticket } from "./ticket";
// import { BookingFlight } from "./bookingTrip";

export class Passenger extends Person {
    private tickets: Ticket[]|null;
    private gender: Gender;
    private booking: Booking[];

    constructor(id, name: string, phoneNumber: string, gender: Gender, bookings: Booking[], tickets: Ticket[]|null) {
        super(id, name, phoneNumber);
        this.gender = gender;
        this.booking = bookings;
        this.tickets = tickets;
    }
    getName(): string {
        return this.name;
    }

    addTicket(ticket: Ticket) {
        this.tickets.push(ticket);
    }

    getTickets(): Ticket[] {
        return this.tickets;
    }

    addBooking(booking: Booking) {
        this.booking.push(booking);
    }

    getBookings(): Booking[] {
        return this.booking;
    }
}
