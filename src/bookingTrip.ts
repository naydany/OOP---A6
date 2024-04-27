// import { Address } from "./address";
import { Flight } from "./flight";

export class BookingFlight {
    private flightNumber: Flight;
    private src_destination: string; 
    private departureTo: string;
    private arriveFrom: string;


    constructor(flightNumber: Flight, src_destination: string, departureTo: string, arriveFrom: string) {
        this.flightNumber = flightNumber;
        this.departureTo = departureTo;
        this.arriveFrom = arriveFrom;

    }

}