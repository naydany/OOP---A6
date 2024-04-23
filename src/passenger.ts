import { Person } from "./person";
import { Gender } from "./enum";

class Passenger extends Person {
    constructor(
        id:number,
        firstName:string, 
        lastName:string,
        phoneNumber:string)
    {
        super(id, firstName, lastName,phoneNumber);
        
    }

    getGender(){
        return Gender.Male;
    }
}

