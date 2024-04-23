import { Person } from "./person";

export class Employee extends Person {
    private salary: number;
    constructor(salary: number, id: number, firsrName: string, lastName: string, phoneNumber: string) {
        super(id, firsrName, lastName, phoneNumber);
        this.salary = salary;
    }
}
