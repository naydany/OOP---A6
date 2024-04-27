
import { Economy_classic, Economy_flex, Business_class, SeatType } from "./enum";

export class Seats{
    private economy_classic: Economy_classic;
    private economy_flex: Economy_flex;
    private business_class: Business_class;
    private seattype:SeatType;
    constructor( economy_classic: Economy_classic, economy_flex: Economy_flex, business_class: Business_class, seattype:SeatType){
        this.economy_classic=economy_classic;
        this.economy_flex = economy_flex;
        this.business_class = business_class;
        this.seattype = seattype;
    }

    getEconomy_classic():Economy_classic{
        return this.economy_classic;
    }
    getEconomy_flex():Economy_flex{
        return this.economy_flex;
    }
    getBusiness_class():Business_class{
        return this.business_class;
    }
    getSetType():SeatType{
        return this.seattype
    }

}


