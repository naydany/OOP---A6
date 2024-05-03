import { DateTime } from "./dateTime";
import { Passenger } from "./passenger";
import { Meal, TicketType } from "./enum";
import { Ticket } from "./ticket";
import { Booking } from "./booking";
import { Route } from "./route";

export class Flight {
    private flightNumber: string;
    private departureTime: DateTime;
    private arrivalTime: DateTime;
    private route:Route;
    private passengers: Passenger[];
    private meals:Meal[];
    constructor(flightNumber: string, departureTime: DateTime, arrivalTime: DateTime,route:Route, passengers: Passenger[],meals:Meal[]) {

        this.flightNumber = flightNumber;
        this.departureTime = departureTime;
        this.arrivalTime = arrivalTime;
        this.route=route;
        this.passengers = passengers;
        this.meals = meals;
    }

    getDepartureTime(): DateTime {
        return this.departureTime;
    }

    getArriveTime(): DateTime {
        return this.arrivalTime;
    }

    getMeal():Meal[]{
        return this.meals;
    }

    getPassengersWithReturnTicketsCount(): number {
        let returnTicketCount = 0;
        for (const passenger of this.passengers) {
            returnTicketCount += passenger.getReturnTicketPassengerCount();
        }
        return returnTicketCount;
    }

    getPassengersWithReturnTicketsDetail(): Passenger[] {
        let passengersWithReturnTickets: Passenger[] = [];
        for (const passenger of this.passengers) {
            if (passenger.getReturnTicketPassengerCount() > 0) {
                passengersWithReturnTickets.push(passenger);
            }
        }
        return passengersWithReturnTickets;
    }
}
