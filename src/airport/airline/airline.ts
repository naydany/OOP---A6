import { Flight } from "../trip/flight/flight";

export class Airline{
    private airlineName:string;
    private codeAirline:string;
    private flights:Flight[]=[];

    constructor (airlineName:string,codeAirline:string){
        this.airlineName=airlineName;
        this.codeAirline=codeAirline;
    }

    addFlight(flight:Flight):void{
        this.flights.push(flight);
    }
}