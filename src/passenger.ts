import { Person } from "./person";
import { Gender } from "./enum";
import { Booking } from "./booking";

export class Passenger extends Person {
    constructor(id:string,name: string, phoneNumber: string, gender: Gender) {
        super(id,name, phoneNumber,gender);
    }
    getName(): string {
        return this.name;
    }
   
}