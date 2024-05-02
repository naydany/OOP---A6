import { DateTime } from "./dateTime";
import { Passenger } from "./passenger";
import { Meal, TicketType } from "./enum";
import { Ticket } from "./ticket";
import { Booking } from "./booking";

export class Flight {
    private flightNumber: string;
    private departureTime: DateTime;
    private arrivalTime: DateTime;
    private origin: string;
    private destination: string;
    private passengers: Passenger[];
    private meals:Meal[];
    constructor(flightNumber: string, departureTime: DateTime, arrivalTime: DateTime, origin: string, destination: string, passengers: Passenger[],meals:Meal[]) {

        this.flightNumber = flightNumber;
        this.departureTime = departureTime;
        this.arrivalTime = arrivalTime;
        this.origin = origin;
        this.destination = destination;
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
