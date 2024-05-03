
import { BookingFlight } from "../../booking/bookingFlight";
import { DateTime } from "../dateTime/dateTime";

export class Trip {
    private detinationTrip:string;
    private departureTime:Date;
    private arriveTime:Date;
    private bookingFlights: BookingFlight;
  
    constructor(detinationTrip:string,departureTime:Date,arriveTime:Date, bookingFlights: BookingFlight) {
        this.detinationTrip=detinationTrip;
        this.departureTime=departureTime;
        this.arriveTime=arriveTime;
        this.bookingFlights=bookingFlights;
       
    }
    // getbookingFlights(bookingflight:BookingFlight) {
    //     this.bookingFlights.push(bookingflight);
    // }
    getDestinationTrip():string{
        return this.detinationTrip;
    }
    getDepartureTime():Date{
        return this.departureTime;
    }
    getArriveTime():Date{
        return this.arriveTime;
    }
}

