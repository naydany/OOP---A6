import { Gate } from "../../gate/gate";

export class Airoplane {
    public planeNumber: string;
    public gate: Gate;
    constructor(planeNumber: string, gate: Gate) {
        this.planeNumber = planeNumber;
        this.gate = gate;
    }

    displayPlaneInfo() {
        console.log(`Plane ${this.planeNumber} - Gate ${this.gate.gateNumber}`);
    }

    getDestination() {
        return this.gate.destination;
    }
}