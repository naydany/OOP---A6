// import from other 


export class Flight{
    private flightNumber:string;
    private origin:string;
    private destination:string;
    private departureTime:Date;
    private arrivalTime:Date;
    constructor(flightNumber:string,origin:string,destination:string,departureTime:Date,arrivalTime:Date){
        this.flightNumber=flightNumber;
        this.departureTime=departureTime;
        this.arrivalTime=arrivalTime;
        this.origin=origin;
        this.destination=destination;
    }

    //method
    getFlightNumber():string{
        return this.flightNumber;
    }
    getOrigin():string{
        return this.origin;
    }

    getDestination():string{
        return this.destination;
    }

    getDepartureTime():Date{
        return this.departureTime;
    }

    getArriveTime():Date{
        return this.arrivalTime;
    }
}
