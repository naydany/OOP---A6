export class Address{
    private city: string;
    private contry: string;
    constructor(city: string, contry: string){
        this.city = city;
        this.contry = contry;
    }

    //method 
    getCity(): string{
        return this.city;
    }
    getContry(): string{
        return this.contry;
    }
}