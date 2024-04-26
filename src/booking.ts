import { DateTime } from "./dateTime";
import { BookingStatus, Meal } from "./enum";
import { Passenger } from "./passenger";
import { Address } from "./address";
import {Flight} from "./flight";
import { ScheduleFlight } from "./scheduleFlight";

export class Booking {
    private prices: string;
    public date = DateTime;
    private passportNumber: number;
    private natinality: string;
    private email: string;
    private bookingStatus: BookingStatus;
    private meal: Meal[] | null;
    private passengers: Passenger;
    private address: Address[];
    private scheduleFlight:ScheduleFlight[];

    constructor(prices: string, date, bookingStatus: BookingStatus, meal: Meal[] | null,address: Address[],scheduleFlight:ScheduleFlight[],passengers: Passenger, email: string, natinality: string, passportNumber: number) {
        this.prices = prices;
        this.date = date;
        this.bookingStatus = bookingStatus;
        this.meal = meal;
        this.passengers = passengers;
        this.email = email;
        this.natinality = natinality;
        this.passportNumber = passportNumber;
        this.address=address;
        this.scheduleFlight=scheduleFlight;
    }
    getBookingStatus(): BookingStatus {
        return this.bookingStatus;
    }
    getMeal(): Meal[] {
        return this.meal;
    }
    getPassengers(): Passenger {
        return this.passengers;
    }

    getAdress():Address[]{
        return this.address
    }
    getschedule():ScheduleFlight[]{
        return this.scheduleFlight;
    }
}





