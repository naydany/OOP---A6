// import from other 
import { DateTime } from "./dateTime";

export class Flight{
    private flightNumber:string;
    private departure:DateTime;
    private arrival:DateTime;
    private origin:string;
    private destination:string;
    constructor(flightNumber:string,departure:DateTime,arrival:DateTime,origin:string,destination:string){
        this.flightNumber=flightNumber;
        this.departure=departure;
        this.arrival=arrival;
        this.origin=origin;
        this.destination=destination;
    }

    //method
    getFlightNumber():string{
        return this.flightNumber;
    }
}