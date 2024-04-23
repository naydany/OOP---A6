export abstract class Person{
    protected id:number;
    protected firsrName:string;
    protected lastName:string;
    protected phoneNumber:string;
    constructor(id:number, firsrName:string, lastName:string, phoneNumber:string){
        this.id = id;
        this.firsrName = firsrName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
    }
}