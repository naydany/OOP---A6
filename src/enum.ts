// job category
export enum JobCategory{
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
    PENDING='PENDING',
    CONFIRMED = 'CONFIRMED',
    CANCELLED= 'CANCELLED'
}
// gender
export enum Gender{
    Male,
    Female
}

//meal type
export enum Meal{
    Vegetarian,
    Vegan,
    Dairy_free,
    Halal_Kosher,
    Forth
}

//Seat type
export enum SeatType{
    Business_classic,
    Business_flex,
    Business_class

}