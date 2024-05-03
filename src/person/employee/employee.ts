import { JobCategory, Gender } from "../../enum/enum";
import { Person } from "../person";
import { TripDetail } from "../../airport/trip/tripDetail/tripDetail";

export class Employee extends Person {
    private salary: number;
    private position: JobCategory;
    private tripDetails: TripDetail[]=[];

    constructor(salary: number, id: string, name: string, phoneNumber: string, gender: Gender, position: JobCategory) {
        super(id, name, phoneNumber);
        this.salary = salary;
        this.position = position;
    }

    getName(): string {
        return this.name;
    }
    getCrew(): JobCategory {
        return JobCategory.admin;
    }
    getPilot(): JobCategory {
        return JobCategory.pilot;
    }
    getChef(): JobCategory {
        return JobCategory.chef;
    }

    getairlineManager(): JobCategory {
        return JobCategory.airportManager;
    }

    getairportManager(): JobCategory {
        return JobCategory.airportManager;
    }

    getairlineController(): JobCategory{
        return JobCategory.airlineController;
    }

    getbaggageHandler(): JobCategory {
        return JobCategory.baggageHandler;
    }

    getSalary(): number {
        return this.salary;
    }

    getPosition(): JobCategory {
        return this.position;
    }

    addTripDetail(tripDetail:TripDetail): void {
        this.tripDetails.push(tripDetail);
    }

}
