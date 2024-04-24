import { DateTime } from "./dateTime";
import { BookingStatus, Meal } from "./enum";
import { Address } from "./address";

export class Booking {
    private prices: string;
    public date = DateTime;
    private bookingStatus: BookingStatus;
    private meal: Meal[] | null;
    private address: Address[];

    constructor(prices: string, date, bookingStatus: BookingStatus, meal: Meal[] | null,address: Address[]) {
        this.prices = prices;
        this.date = date;
        this.bookingStatus = bookingStatus;
        this.meal = meal;
        this.address=address;
    }
    getBookingStatus(): BookingStatus {
        return this.bookingStatus;
    }
    getMeal(): Meal[] {
        return this.meal;
    }
    getAdress():Address[]{
        return this.address
    }
}



