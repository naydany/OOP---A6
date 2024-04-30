class Gate {
    private gateNumber: string;
    private destination: string;
    constructor(gateNumber: string, destination: string) {
        this.gateNumber = gateNumber;
        this.destination = destination;
    }
    displayGateInfo() {
        console.log(`Gate ${this.gateNumber} - Destination: ${this.destination}`);
    }
}