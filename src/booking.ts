import { DateTime } from "./dateTime";
import { BookingStatus } from "./enum";
import { Address } from "./address";

export class Booking {
    private prices: string;
    public date = DateTime;
    private bookingStatus: BookingStatus;
    private address: Address[];
    constructor(prices: string, date, bookingStatus: BookingStatus, address: Address[]) {
        this.prices = prices;
        this.date = date;
        this.bookingStatus = bookingStatus;
        this.address = address;
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


