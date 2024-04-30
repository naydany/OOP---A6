import { Employee } from "./employee";
import { Gender } from "./enum";
import { Flight } from "./flight";

export class Pilot extends Employee {
    private flight:Flight[];
    constructor(salary: number,id:string, name: string, phoneNumber: string,gender:Gender[],flight:Flight[]) {
        super(salary,id, name, phoneNumber,gender);
        this.flight=flight;
    }
    getFlights():Flight[]{
        return this.flight
    }
    
}