import { Seats } from "./seats";
import { Airline } from "./airline";
import { Gate } from "./gate";

export class Airport {

    private airportName:string;
    private gates: Gate[]=[];
    private airlines:Airline[]=[];
    constructor(airportName: string) {
        this.airportName = airportName;
    }
    addGate(gate:Gate):void {
        this.gates.push(gate);
    }
    addAirline(airline:Airline): void{
        this.airlines.push(airline);
    }

}

