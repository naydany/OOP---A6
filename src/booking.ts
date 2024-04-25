import { DateTime } from "./dateTime";
import { BookingStatus, Meal } from "./enum";
import { Address } from "./address";
import {Flight} from "./flight";
import { ScheduleFlight } from "./scheduleFlight";

export class Booking {
    private prices: string;
    public date = DateTime;
    private bookingStatus: BookingStatus;
    private meal: Meal[] | null;
    private address: Address[];
    private scheduleFlight:ScheduleFlight[];

    constructor(prices: string, date, bookingStatus: BookingStatus, meal: Meal[] | null,address: Address[],scheduleFlight:ScheduleFlight[]) {
        this.prices = prices;
        this.date = date;
        this.bookingStatus = bookingStatus;
        this.meal = meal;
        this.address=address;
        this.scheduleFlight=scheduleFlight;
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
    getschedule():ScheduleFlight[]{
        return this.scheduleFlight;
    }
}



