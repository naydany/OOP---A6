import { Person } from "../person";
import { Gender, TicketType } from "../../enum/enum";
import { Ticket } from "../../booking/ticket/ticket";

export class Passenger extends Person {
    private gender: Gender;
    private tickets: Ticket[];

    constructor(id: any, name: string, phoneNumber: string, gender: Gender) {
        super(id, name, phoneNumber);
        this.gender = gender;
        this.tickets = [];
    }

    getName(): string {
        return this.name;
    }

    getReturnTicketPassengerDetails(): Ticket[] {
        return this.tickets.filter(ticket => ticket.ticketType === TicketType.Return);
    }

    getReturnTicketPassengerCount(): number {
        return this.getReturnTicketPassengerDetails().length;
    }

    addTicket(ticket: Ticket) {
        this.tickets.push(ticket);
    }

    getTickets(): Ticket[] {
        return this.tickets;
    }
}
