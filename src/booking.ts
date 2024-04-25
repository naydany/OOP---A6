import { DateTime } from "./dateTime";
import { BookingStatus, Meal } from "./enum";
import { Passenger } from "./passenger";

export class Booking {
    private prices: string;
    public date = DateTime;
    private passportNumber: number;
    private natinality: string;
    private email: string;
    private bookingStatus: BookingStatus;
    private meal: Meal[] | null;
    private passengers: Passenger;
    constructor(prices: string, date, bookingStatus: BookingStatus, meal: Meal[] | null, passengers: Passenger, email: string, natinality: string, passportNumber: number) {
        this.prices = prices;
        this.date = date;
        this.bookingStatus = bookingStatus;
        this.meal = meal;
        this.passengers = passengers;
        this.email = email;
        this.natinality = natinality;
        this.passportNumber = passportNumber;
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

}





