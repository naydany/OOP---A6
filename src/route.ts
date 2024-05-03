import { Airline } from "./airline";
import { Airport } from "./airport";

export class Route{
    private origin:string;
    private destination:string;
    private distance:string;
    private airports:Airport[]=[];
    constructor(origin:string,destination:string,distance:string){
        this.origin=origin;
        this.destination=destination;
        this.distance=distance;
    }

    getOrigin():string{
        return this.origin;
    }
    getDestination():string{
        return this.destination;
    }
    getDistance():string{
        return this.distance;
    }
    addAirport(airport:Airport):void{
        this.airports.push(airport);
    }
    
}