export class Task {
    finished: boolean = false;
    title?: string;

    constructor(finished: boolean, title?: string, ){
        this.finished = finished;
        this.title = title;
    }
}
