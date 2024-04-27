import { DateTime } from "./dateTime";
import { BookingStatus, Meal, SeatType } from "./enum";

export class Booking {
    private prices: string;
    public date = DateTime;
    private bookingStatus: BookingStatus;
    private meal: Meal[] | null;
    public seatType:SeatType;

    constructor(prices: string, date, bookingStatus: BookingStatus, meal: Meal[] | null, seatType:SeatType) {
        this.prices = prices;
        this.date = date;
        this.bookingStatus = bookingStatus;
        this.meal = meal;
        this.seatType = seatType;
    }
    getBookingStatus(): BookingStatus {
        return this.bookingStatus;
    }
    getMeal(): Meal[] {
        return this.meal;
    }
    getSeatType(): SeatType{
        return this.seatType;
    }
}



