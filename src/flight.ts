import { DateTime } from "./dateTime";
import { Passenger } from "./passenger";

export class Flight {
    private flightNumber: string;
    private departureTime: DateTime;
    private arrivalTime: DateTime;
    private origin: string;
    private destination: string;
    private passengers: Passenger[];

    constructor(flightNumber: string, departureTime: DateTime, arrivalTime: DateTime, origin: string, destination: string, passengers: Passenger[]) {
        this.flightNumber = flightNumber;
        this.departureTime = departureTime;
        this.arrivalTime = arrivalTime;
        this.origin = origin;
        this.destination = destination;
        this.passengers = passengers; // Correct assignment
    }

    getDepartureTime(): DateTime {
        return this.departureTime;
    }

    getArriveTime(): DateTime {
        return this.arrivalTime;
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
