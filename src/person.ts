import { Gender } from "./enum";

export abstract class Person {
    protected id: string;
    protected name: string;
    protected phoneNumber: string;
    protected gender: Gender[];
    constructor(id:string,name: string, phoneNumber: string, gender: Gender[]) {
        this.id = id;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.gender = gender;
    }
    abstract getName(): string;
}