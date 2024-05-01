import { Person } from "./person";
import { Gender, TicketType } from "./enum";
import { Ticket } from "./ticket";

export class Passenger extends Person {
    private gender: Gender;
    private ticket: Ticket[];

    constructor(id, name: string, phoneNumber: string, gender: Gender, ticket: Ticket) {
        super(id, name, phoneNumber);
        this.gender = gender;
        this.ticket = [ticket];
    }

    getName(): string {
        return this.name;
    }

    getReturnTicketPassengerDetails(): Ticket[] {
        const returnTicketPassengers: Ticket[] = [];
        for (const ticket of this.ticket) {
            if (ticket.ticketType === TicketType.Return) {
                returnTicketPassengers.push(ticket);
            }
        }
        return returnTicketPassengers;
    }

    getReturnTicketPassengerCount(): number {
        return this.getReturnTicketPassengerDetails().length;
    }

    addTicket(ticket: Ticket) {
        this.ticket.push(ticket);
    }

    getTickets(): Ticket[] {
        return this.ticket;
    }
}
