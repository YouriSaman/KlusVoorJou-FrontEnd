export class Job {
    title?: string;
    imageUrl?: string;
    description?: string;
    zipCode?: string;
    city?: string;

    constructor(title?: string, imageUrl?: string, description?: string, zipCode?: string, city?: string){
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.zipCode = zipCode;
        this.city = city;
    }
}
