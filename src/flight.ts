export class Flight{
    private flightNumber:string;
    constructor(flightNumber:string){
        this.flightNumber=flightNumber;
    }

    //method
    getFlightNumber():string{
        return this.flightNumber;
    }
}