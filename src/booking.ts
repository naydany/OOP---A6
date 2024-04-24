import { DateTime } from "./dateTime";
import { BookingStatus, Meal } from "./enum";

export class Booking {
    private prices: string;
    public date = DateTime;
    private bookingStatus: BookingStatus;
    private meal: Meal[] | null;

    constructor(prices: string, date, bookingStatus: BookingStatus, meal: Meal[] | null) {
        this.prices = prices;
        this.date = date;
        this.bookingStatus = bookingStatus;
        this.meal = meal;
    }
    getBookingStatus(): BookingStatus {
        return this.bookingStatus;
    }
    getMeal(): Meal[] {
        return this.meal;
    }
}



