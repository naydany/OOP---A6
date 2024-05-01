export class DateTime {
    public date = new Date();
    public timeBookingReference = new Date();
    constructor(date) {
        this.date = date;
    }

    getAllDate() {
        const hours = this.date.getHours() < 10 ? "0" + this.date.getHours() : this.date.getHours();

        return this.date.getDay() + '/' + this.date.getDate() + '/' + (this.date.getFullYear()) + ' ' + hours+ ':' + this.date.getMinutes();
    }

    getTimeBookingReference() {
        const hours = this.timeBookingReference.getHours() < 10 ? "0" + this.timeBookingReference.getHours() : this.timeBookingReference.getHours();
        return this.timeBookingReference.getDay() + '/' + this.timeBookingReference.getDate() + '/' + (this.timeBookingReference.getFullYear()) + ' ' + hours+ ':' + this.timeBookingReference.getMinutes();
    }
    
}


