// Import statements
import { DateTime } from "./dateTime";
import { Flight } from "./flight";
import { Address } from "./address";

export class ScheduleFlight {
  protected flight: Flight;
  protected dateTime: DateTime[];
  protected from: Address[];
  protected to: Address[];
  protected departure: DateTime[];
  protected arriveTime: DateTime[];

  constructor(
    flight: Flight,
    dateTime: DateTime[],
    from: Address[],
    to: Address[],
    departure: DateTime[],
    arriveTime: DateTime[]
  ) {
    this.flight = flight;
    this.dateTime = dateTime;
    this.from = from;
    this.to = to;
    this.departure = departure;
    this.arriveTime = arriveTime;
  }

  // Method to get the flight schedule
  getSchedule() {
    return {
      flight: this.flight,
      dateTime: this.dateTime,
      from: this.from,
      to: this.to,
      departure: this.departure,
      arriveTime: this.arriveTime,
    };
  }
}


