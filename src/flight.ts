// import from other 
import { DateTime } from "./dateTime";

export class Flight{
    private flightNumber:string;
    private departureTime:DateTime;
    private arrivalTime:DateTime;
    private origin:string;
    private destination:string;
    constructor(flightNumber:string,departureTime:DateTime,arrivalTime:DateTime,origin:string,destination:string){
        this.flightNumber=flightNumber;
        this.departureTime=departureTime;
        this.arrivalTime=arrivalTime;
        this.origin=origin;
        this.destination=destination;
    }

    //method
    getFlightNumber():string{
        return this.flightNumber;
    }
    getOrigin():string{
        return this.origin;
    }

    getDestination():string{
        return this.destination;
    }

    getDepartureTime():DateTime{
        return this.departureTime;
    }

    getArriveTime():DateTime{
        return this.arrivalTime;
    }
}
