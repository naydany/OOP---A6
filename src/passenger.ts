import { Person } from "./person";
import { Gender } from "./enum";
import { Booking } from "./booking";

export class Passenger extends Person {
    private booking : Booking[] = [];
    constructor(name: string, phoneNumber: string, private gender: Gender, booking: Booking[] = []) {
        super(name, phoneNumber);
        this.gender = gender;
        this.booking = booking;
    }
    getName():string{
        return this.name;
    }
    addTicket(ticket: Booking): void {
        this.booking.push(ticket);
    }
    
}




