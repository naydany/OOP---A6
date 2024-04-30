
import { BookingFlight } from "./bookingFlight";
import { DateTime } from "./dateTime";

export class Trip {
    private detinationTrip:string;
    private departureTime:Date;
    private arriveTime:Date;
    private bookingFlights: BookingFlight[] = [];
  
    constructor(detinationTrip:string,departureTime:Date,arriveTime:Date) {
        this.detinationTrip=detinationTrip;
        this.departureTime=departureTime;
        this.arriveTime=arriveTime;
       
    }
    getbookingFlights(bookingflight:BookingFlight) {
        this.bookingFlights.push(bookingflight);
    }
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

