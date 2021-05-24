import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../classes/task';
import { TasksDataModel } from '../classes/tasks-data-model';

@Injectable({
  providedIn: 'root'
})
export class JobProgressService {
  private url = "https://localhost:5001/api/jobprogress"

  constructor(private http: HttpClient) { }

  getJobs(jobId: string): Observable<TasksDataModel> {
    return this.http.get<TasksDataModel>(this.url + "/tasks?jobId=" + jobId);
  }

  changeTaskState(task: Task) {
    console.log(task);
    return this.http.post(this.url + "/updatetask", task).subscribe();
  }
}
