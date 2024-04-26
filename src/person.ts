export abstract class Person {
    protected name: string;
    protected phoneNumber: string;
    constructor(name: string, phoneNumber: string) {
        this.name = name;
        this.phoneNumber = phoneNumber;
    }
    abstract getName(): string;
}