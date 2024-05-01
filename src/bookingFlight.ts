
import { Flight } from "./flight";

export class BookingFlight {
    private flights:Flight[]=[];

    addAllFlight(flight:Flight):void{
        this.flights.push(flight);
    }

}

