import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobListDataModel } from '../classes/job-list-data-model';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private url = "https://localhost:5001/api/job"

  constructor(private http: HttpClient) { }

  getJobs(): Observable<JobListDataModel> {
    return this.http.get<JobListDataModel>(this.url);
  }
}
