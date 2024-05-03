export class Payment {
    private payment_id: string;
    private payment :string;
    
    constructor(payment_id: string, payment :string) {
        this.payment_id = payment_id;
        this.payment = payment;
    }


    getpayment(): string { 
        return this.payment_id; 
    }
}