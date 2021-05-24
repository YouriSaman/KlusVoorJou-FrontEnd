import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/classes/company';
import { Job } from 'src/app/classes/job';
import { Task } from 'src/app/classes/task';
import { JobProgressService } from 'src/app/services/job-progress.service';

@Component({
  selector: 'app-job-progress',
  templateUrl: './job-progress.component.html',
  styleUrls: ['./job-progress.component.css']
})
export class JobProgressComponent implements OnInit {
  job: Job = new Job("", "Grasmaaien", "Voor en achtertuin grasmaaien", "https://www.makita.nl/data/ab/public/tuincentrum/Keuzehulp/plm4631n2_4-takt_grasmaaier-5.jpg", "5673PS", "Nuenen");
  company: Company = new Company("Het Rullen", "https://static.trustoo.nl/users/49577/e140bca090.png", "5674PC", "Nuenen");
  tasks: Task[] = [];
  progress = 0;

  constructor(private route: ActivatedRoute, private jobProgressService: JobProgressService) { 
    var jobId = this.route.snapshot.paramMap.get('id')!; //Add try catch or something!
    jobProgressService.getJobs(jobId).subscribe(
      data => {
        this.tasks = data.tasks;
        this.calculateProgress();
      } 
    );
  }

  ngOnInit(): void {
  }

  updateProgress(id: string){
    let task = this.getTask(id);
    if(task != undefined){
      this.changeTaskFinishedBool(task);
      this.jobProgressService.changeTaskState(task);
    }
    this.calculateProgress();
  }

  private calculateProgress(){
    let finishedTasks = 0;
    this.tasks.forEach(function (task){
      if(task.finished){
        finishedTasks++;
      }
    });
    this.progress = (finishedTasks/this.tasks.length) * 100;
  }

  private getTask(id: string){
    return this.tasks.find(t => t.id === id);
  }

  private changeTaskFinishedBool(task: Task){
    if(task.finished){
      task.finished = false;
    } else {
      task.finished = true;
    }
  }

}
