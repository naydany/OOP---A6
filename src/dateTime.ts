export class DateTime {
    public date = new Date();
    constructor(date) {
        this.date = date;
    }

    getAllDate() {
        const hours = this.date.getHours() < 10 ? "0" + this.date.getHours() : this.date.getHours();

        return this.date.getDay() + '/' + this.date.getDate() + '/' + (this.date.getMonth() + 1) + ' ' + hours+ ':' + this.date.getMinutes();
    }
}


