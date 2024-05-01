
import { Flight } from "./flight";
import { Passenger } from "./passenger";
import { Baggage } from "./baggage";

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