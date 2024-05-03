export class Baggage{
    private numberbaggage:string;
    private weight:string;
    constructor(numberbaggage:string, weight:string){
        this.numberbaggage = numberbaggage;
        this.weight = weight;
    }

    getNumberBaggage():string{
        return this.numberbaggage;
    }
    getWeight():string{
        return this.weight;
    }
    
}