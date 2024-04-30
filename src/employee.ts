import { JobCategory, Gender } from "./enum";
import { Person } from "./person";

export class Employee extends Person {
    private salary: number;
    private position: JobCategory;
    constructor(salary: number, id: string, name: string, phoneNumber: string, gender: Gender[]) {
        super(id, name, phoneNumber);
        this.salary = salary;
        // this.position = position;
    }

    getName(): string {
        return this.name;
    }
   
}
