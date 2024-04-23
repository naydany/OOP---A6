
export class BookingStatus {
    confirm: string
    edit: string
    cancel:string

    constructor(confirm: string,edit: string,cancel:string){
        this.cancel=cancel;
        this.confirm=confirm;
        this.edit=edit;
    }
}