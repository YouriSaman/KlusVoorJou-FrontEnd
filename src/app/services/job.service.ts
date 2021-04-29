import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../classes/job';
import { JobDataModel } from '../classes/job-data-model';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private url = "https://localhost:5001/api/job"

  constructor(private http: HttpClient) { }

  getJobs(): Observable<JobDataModel> {
    return this.http.get<JobDataModel>(this.url);
  }
}
