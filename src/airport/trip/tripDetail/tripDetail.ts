
import { Flight } from "../flight/flight";
import { Passenger } from "../../../person/passenger/passenger";
import { Baggage } from "../../../booking/baggage/baggage";

export class TripDetail{
    private flights:Flight[]=[];
    private passengers:Passenger[]=[];
    private baggages:Baggage[]=[];

    addFlight(flight:Flight):void{
      this.flights.push(flight);
    }
    
    addPassenger(passenger:Passenger):void{
        this.passengers.push(passenger);
    }

    addBaggage(baggage:Baggage):void{
        this.baggages.push(baggage);
    }
    
    getFlight(flight:Flight){
        return this.flights;
    }

    getPassenger():Passenger[]{
        return this.passengers;
    }
    getBaggage():Baggage[]{
        return this.baggages;
    }
}