import { Person } from "./person";

export class Employee extends Person {

    private salary: number;
    constructor(salary: number, name: string, phoneNumber: string) {
        super(name, phoneNumber);
        this.salary = salary;
    }
    getName(): string {
        return this.name;
    }
}
