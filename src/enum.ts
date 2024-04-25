// job category
export enum JobCategory {
    admin,
    crew,
    pilot,
    co_pilot,
    airlineManager,
    chef,
    airportManager,
    baggageHandler
}



//booking status
export enum BookingStatus {
    PENDING = 'PENDING',
    CONFIRMED = 'CONFIRMED',
    CANCELLED = 'CANCELLED'
}


// gender
export enum Gender {
    Male="Male",
    Female ="Female"
}


//meal type
export enum Meal {
    Vegetarian = "Vegetarian",
    Vegan = "Vegan",
    Dairy_free = "Dairy_free",
    Halal_Kosher = "Halal_K",
    Forth = "Forth",
}


//Seat type
export enum SeatType {
    Business_classic = 'Business classic',
    Business_flex = 'Business flex',
    Business_class = 'Business class'

}