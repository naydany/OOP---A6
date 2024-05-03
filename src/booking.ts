import { BookingStatus, Meal } from "./enum";
import { Baggage } from "./baggage";
import { Trip } from "./trip";
import { BookingFlight } from "./bookingFlight";
import { Passenger } from "./passenger";
import { Payment } from "./payment";

export class Booking {
    private prices: string;
    private passportNumber: number;
    private natinality: string;
    private email: string;
    private bookingStatus: BookingStatus;
    public meal: Meal[] | null;
    private passengers: Passenger;
    private trip: Trip[] | null;
    private baggage: Baggage[] | null;
    private payments: Payment[] = [];

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
        bookingReference: BookingFlight[] | null,
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

    getMeal(): Meal[] {
        return this.meal;
    }

    getEmail(): string {
        return this.email;
    }

    addPayment(payment: Payment) {
        this.payments.push(payment);
    }


}
