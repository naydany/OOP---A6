import { Seats } from "./seats";

export class Airport {
    // private codeFlight:string;
    private airCraft: string;
    private seat: Seats[];
    constructor(airCraft: string) {
        this.airCraft = airCraft;
    }
    getSeat(): Seats[] {
        return this.seat;
    }

    
}