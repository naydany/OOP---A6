import { DateTime } from "./dateTime";
import { Passenger } from "./passenger";
import { TicketType } from "./enum";
import { Ticket } from "./ticket";


export class Flight{
    private flightNumber:string;
    private departureTime:DateTime;
    private arrivalTime:DateTime;
    private origin:string;
    private destination:string;
    // private ticket: Ticket[];
    constructor(flightNumber:string,departureTime:DateTime,arrivalTime:DateTime,origin:string,destination:string ){
        this.flightNumber=flightNumber;
        this.departureTime=departureTime;
        this.arrivalTime=arrivalTime;
        this.origin=origin;
        this.destination=destination;
        // this.ticket = ticket;
    }

    getDepartureTime():DateTime{
        return this.departureTime;
    }

    getArriveTime():DateTime{
        return this.arrivalTime;
    }
   


}
