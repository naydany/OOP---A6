import { Seats } from "./trip/seatLaout/seats";
import { Airline } from "./airline/airline";
import { Gate } from "./gate/gate";

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

