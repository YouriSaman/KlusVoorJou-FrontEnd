export class Task {
    id: string;
    finished: boolean;
    title?: string;

    constructor(id: string, finished: boolean, title?: string){
        this.id = id;
        this.finished = finished;
        this.title = title;
    }
}
