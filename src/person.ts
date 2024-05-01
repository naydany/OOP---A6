import { Gender } from "./enum";

export abstract class Person {
    protected id: string;
    protected name: string;
    protected phoneNumber: string;
    constructor(id: string, name: string, phoneNumber: string) {
        this.id = id;
        this.name = name;
        this.phoneNumber = phoneNumber;
    }
    abstract getName(): string;
}