

import { BookingStatus } from "./enum";

export class Booking{
    private price: string;
    private bookingStatus: BookingStatus;
    constructor(price: string, bookingStatus: BookingStatus){
        this.price = price;
        this.bookingStatus = bookingStatus;
    }

    getBookingStatus(): BookingStatus {
        return this.bookingStatus;
    }
}