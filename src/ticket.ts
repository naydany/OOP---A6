
import { Flight } from "./flight";
import { Passenger } from "./passenger";
import { SeatType} from "./enum";

export class Ticket {
    private ticketType: SeatType;
    // private passenger: Passenger;
    private flight: Flight;

    constructor(ticketType: SeatType,flight: Flight) {
        this.ticketType = ticketType;
        // this.passenger = passenger;
        this.flight = flight;
    }

    

}