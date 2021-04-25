export class Company {
    name?: string;
    imageUrl?: string;
    zipCode?: string;
    city?: string;

    constructor(name?: string, imageUrl?: string, zipCode?: string, city?: string){
        this.name = name;
        this.imageUrl = imageUrl;
        this.zipCode = zipCode;
        this.city = city;
    }
}
