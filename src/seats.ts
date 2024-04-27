import { SeatType } from "./enum";

export class seats {
    private seatNums: SeatType;

    constructor(seatNums: SeatType) {
        this.seatNums = seatNums;
    }
    getBusinessClassic() {
        return SeatType.Business_classic;
    }
    getBusinessFlex() {
        return SeatType.Business_flex;
    }
    getBusinessClass() {
        return SeatType.Business_class;
    }
}