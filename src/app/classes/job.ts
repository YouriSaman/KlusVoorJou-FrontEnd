export class Job {
    id?: string;
    title?: string;
    imageUrl?: string;
    description?: string;
    zipCode?: string;
    city?: string;

    constructor(id?: string, title?: string, imageUrl?: string, description?: string, zipCode?: string, city?: string){
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.zipCode = zipCode;
        this.city = city;
    }
}
