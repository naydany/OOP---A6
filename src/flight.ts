import { DateTime } from "./dateTime";
import { Passenger } from "./passenger";
import { TicketType } from "./enum";
import { Ticket } from "./ticket";

export class Flight {
    private ticket: Ticket[];
    constructor(private flightNumber: string, private origin: string, private destination: string,
        private departureTime: Date, private arrivalTime: Date, public passengers: Passenger[], ticket:Ticket[]
    ) {
        this.ticket = [];
    }

    addTicket(ticket: Ticket): void {
        this.ticket.push(ticket);
    }

    getTicket() {
        return this.ticket;
    }

    getReturnTicketPassengerDetails(): Passenger[] {
        const returnTicketPassengers: Passenger[] = [];
        for (const passenger of this.passengers) {
            for (const ticket of passenger.getTickets()) {
                if (ticket.ticketType === TicketType.Return) {
                    returnTicketPassengers.push(passenger);
                }
            }
        }
        return returnTicketPassengers;
    }

    getReturnTicketPassengerCount(): number {
        return this.getReturnTicketPassengerDetails().length;
    }


}
