import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Job } from 'src/app/classes/job';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-job-create',
  templateUrl: './job-create.component.html',
  styleUrls: ['./job-create.component.css'],  
  encapsulation: ViewEncapsulation.None
})
export class JobCreateComponent implements OnInit {
  job: Job = new Job();

  constructor(private jobService: JobService) { }

  ngOnInit(): void {
  }

  addJob(){
    this.jobService.createJob(this.job);
  }
}
