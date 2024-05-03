// --- job category ---
export enum JobCategory {
    admin ="admin",
    crew ="crew",
    pilot="pilot",
    co_pilot="co_pilot",
    airlineManage="airlineManager",
    chef="chef",
    airportManager="airportManager",
    airlineController="airlineController",
    baggageHandler="baggageHandler",
}

//--- booking status ---
export enum BookingStatus {
    PENDING = 'PENDING',
    CONFIRMED = 'CONFIRMED',
    CANCELLED = 'CANCELLED',
    Return = "Return"
}


// --- gender ---
export enum Gender {
    Male="Male",
    Female ="Female"
}


// --- meal type ---
export enum Meal {
    Vegetarian = "Vegetarian",
    Vegan = "Vegan",
    Dairy_free = "Dairy_free",
    Halal_Kosher = "Halal_K",
    Forth = "Forth",
}


//  ticket type
 export enum TicketType {
    OneWay = 'one-way',
    Return = 'return'
}


//Seat type
export enum SeatType {
    Economy_classic = 'Business_classic',
    Economy_flex = 'Business_flex',
    Business_class = 'Business_class'

}


// --- Seat Number ---
export enum Economy_classic{
    A1='A1',
    A2='A2',
    A3='A3',
    A4='A4',
    A5='A5',
    A6='A6',
}
export enum Economy_flex{
    B1='B1',
    B2='B2',
    B3='B3',
    B4='B4',
    B5='B5',
    B6='B6',
}
export enum Business_class{
    C1='C1',
    C2='C2',
    C3='C3',
    C4='C4',
    C5='C5',
    C6='C6',
}