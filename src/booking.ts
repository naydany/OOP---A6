import { DateTime } from "./dateTime";

export class Booking {
    private prices: number;
    public date = DateTime;
    
    constructor(prices, date) {
        this.prices = prices;
        this.date = date;
    }
}


