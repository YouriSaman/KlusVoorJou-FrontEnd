export class Task {
    id: number;
    finished: boolean;
    title?: string;

    constructor(id: number, finished: boolean, title?: string){
        this.id = id;
        this.finished = finished;
        this.title = title;
    }
}
