
import { Booking } from "./booking";
import { BookingStatus } from "./enum";

let getStatusBooking =BookingStatus.CANCELLED;
let booking = new Booking('34$', getStatusBooking);

console.log(booking);