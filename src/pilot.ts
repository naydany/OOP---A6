// import from other
import { Employee } from "./employee";
import { JobCategory,Gender } from "./enum";
import { Flight } from "./flight";

export class Pilot extends Employee {
    private flight:Flight[];
    constructor(salary: number,id:string, name: string, phoneNumber: string,gender:Gender,flight:Flight[],position: JobCategory) {
        super(salary,id, name, phoneNumber,gender,position);
        this.flight=flight;
    }
    getFlights():Flight[]{
        return this.flight
    }
    
}