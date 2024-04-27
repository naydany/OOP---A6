import { seats } from "./seats";

export class Airport {
    // private codeFlight:string;
    private airCraft: string;
    private seat: seats[];
    constructor(airCraft: string) {
        this.airCraft = airCraft;
    }
    getSeat(): seats[] {
        return this.seat;
    }

    
}