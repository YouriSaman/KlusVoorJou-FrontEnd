export class Job {
    id?: string;
    title?: string;
    description?: string;
    imageUrl?: string;
    zipCode?: string;
    city?: string;

    constructor(id?: string, title?: string, description?: string, imageUrl?: string, zipCode?: string, city?: string){
        this.id = id;
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.zipCode = zipCode;
        this.city = city;
    }
}
