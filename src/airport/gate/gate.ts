export class Gate {
    public gateNumber: string;
    public destination: string;
    constructor(gateNumber: string, destination: string) {
        this.gateNumber = gateNumber;
        this.destination = destination;
    }
    displayGateInfo() {
        console.log(`Gate ${this.gateNumber} - Destination: ${this.destination}`);
    }
}