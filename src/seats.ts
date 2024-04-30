
import { Economy_classic, Economy_flex, Business_class, SeatType } from "./enum";

export class Seats{
    private seattype:SeatType;
    public seatNumber:Economy_classic | Economy_flex | Business_class;
    constructor( seattype:SeatType,seatNumber:Economy_classic | Economy_flex | Business_class){
        this.seattype = seattype;
        this.seatNumber=seatNumber
    }

    getSetType():SeatType{
        return this.seattype
    }
  
}

// let seat = new Seats(SeatType.Economy_flex,Economy_flex.B2);
// console.log(seat)