
import { Economy_classic, Economy_flex, Business_class, SeatType } from "./enum";

export class Seats{
    private seattype:SeatType;
    private seatNumber:string;
    constructor( seattype:SeatType,seatNumber:string){
        this.seattype = seattype;
        this.seatNumber = seatNumber;
    }

    
    getSetType():SeatType{
        return this.seattype
    }
    
}


