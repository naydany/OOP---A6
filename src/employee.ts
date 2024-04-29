import { JobCategory,Gender } from "./enum";
import { Person } from "./person";

export class Employee extends Person {
    private salary: number;
    private position: JobCategory;
    constructor(salary: number,id:string, name: string, phoneNumber: string,gender:Gender[]) {
        super(id,name, phoneNumber,gender);
        this.salary = salary;
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

    getairline(): JobCategory {
        return JobCategory.airlineManager;
    }

    getChef(): JobCategory {
        return JobCategory.chef;
    }

    getairlineManager(): JobCategory {
        return JobCategory.airlineManager;
    }

    getairportManager(): JobCategory {
        return JobCategory.airportManager;
    }

    getbaggageHandler(): JobCategory {
        return JobCategory.baggageHandler;
    }
}
