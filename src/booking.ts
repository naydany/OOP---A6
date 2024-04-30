import { BookingStatus, Meal } from "./enum";
import { Passenger } from "./passenger";
import { Address } from "./address";
import { Baggage } from "./baggage";
import { Trip } from "./trip";
import { BookingFlight } from "./bookingTrip";

export class Booking {
    // getBookingReference(BookingflgihtReferences: BookingFlight) {
    //     throw new Error("Method not implemented.");
    // }
    private prices: string;
    private passportNumber: number;
    private natinality: string;
    private email: string;
    private bookingStatus: BookingStatus;
    private meal: Meal[] | null;
    private passengers: Passenger;
    private trip: Trip[] | null;
    private baggage: Baggage[] | null;

    constructor(
        price: string,
        passportNumber: number,
        natinality: string,
        email: string,
        bookingStatus: BookingStatus,
        meal: Meal[] | null,
        passengers: Passenger,
        trip: Trip | null,
        baggage: Baggage[] | null,
        bookingReference: BookingFlight[] | null
    ) {
        this.prices = price;
        this.passportNumber = passportNumber;
        this.natinality = natinality;
        this.email = email;
        this.bookingStatus = bookingStatus;
        this.meal = meal;
        this.passengers = passengers;
        this.baggage = baggage;

   
    }


    // getBookingStatus(): BookingStatus {
    //     return this.bookingStatus;
    // }

    // getMeal(): Meal[] {
    //     return this.meal;
    // }

    // getPassengers(): Passenger {
    //     return this.passengers;
    // }
}
