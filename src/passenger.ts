import { Person } from "./person";
import { Gender } from "./enum";
import { Booking } from "./booking";

export class Passenger extends Person {
    private booking: Booking[] = [];
    constructor(id:string,name: string, phoneNumber: string, gender: Gender[], booking: Booking[] = []) {
        super(id,name, phoneNumber,gender);
        this.booking = booking;
    }
    getName(): string {
        return this.name;
    }
    addTicket(ticket: Booking): void {
        this.booking.push(ticket);
    }
}