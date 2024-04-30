// import { Address } from "./address";
import { Flight } from "./flight";

export class BookingFlight {
    private flights:Flight[]=[];

    getAllFlight(flight:Flight):void{
        this.flights.push(flight);
    }

}

