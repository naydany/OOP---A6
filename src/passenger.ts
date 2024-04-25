import { Person } from "./person";
import { Gender } from "./enum";
import { Ticket } from "./ticket";


export class Passenger extends Person {
    private ticket: Ticket[] = [];
    constructor(name: string, phoneNumber: string, private gender: Gender, ticket: Ticket[] = []) {
        super(name, phoneNumber);
        this.gender = gender;
        this.ticket = ticket;
    }
    getName():string{
        return this.name;
    }
    addTicket(ticket: Ticket): void {
        this.ticket.push(ticket);
    }
    
}




