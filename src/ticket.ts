
import { Flight } from "./flight";
import { Passenger } from "./passenger";
import { SeatType} from "./enum";
import { Seats } from "./seats";

export class Ticket {
    private ticketType: SeatType;
    // private passenger: Passenger;
    private flight: Flight;
    private seat:Seats;

    constructor(ticketType: SeatType,flight: Flight,seat:Seats) {
        this.ticketType = ticketType;
        // this.passenger = passenger;
        this.flight = flight;
        this.seat =seat;
    }

}