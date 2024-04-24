import { DateTime } from "./dateTime";
import { BookingStatus } from "./enum";

export class Booking {
    private prices: string;
    public date = DateTime;
    private bookingStatus: BookingStatus;
    constructor(prices: string, date, bookingStatus: BookingStatus) {
        this.prices = prices;
        this.date = date;
        this.bookingStatus = bookingStatus;
    }
    getBookingStatus(): BookingStatus {
        return this.bookingStatus;
    }
}

// export class Booking {
//     private price: string;
//     private bookingStatus: BookingStatus;
//     constructor(price: string, bookingStatus: BookingStatus) {
//         this.price = price;
//         this.bookingStatus = bookingStatus;
//     }


// }


