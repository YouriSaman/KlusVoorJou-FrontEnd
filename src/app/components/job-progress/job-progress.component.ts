import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/classes/company';
import { Job } from 'src/app/classes/job';
import { Task } from 'src/app/classes/task';

@Component({
  selector: 'app-job-progress',
  templateUrl: './job-progress.component.html',
  styleUrls: ['./job-progress.component.css']
})
export class JobProgressComponent implements OnInit {
  job: Job = new Job("Grasmaaien", "https://www.makita.nl/data/ab/public/tuincentrum/Keuzehulp/plm4631n2_4-takt_grasmaaier-5.jpg", "Voor en achtertuin grasmaaien", "5673PS", "Nuenen");
  company: Company = new Company("Het Rullen", "https://static.trustoo.nl/users/49577/e140bca090.png", "5674PC", "Nuenen");
  tasks: Task[] = [
    new Task(true, "Voortuin"),
    new Task(false, "Achtertuin")
  ]
  progress = 0;

  constructor() { }

  ngOnInit(): void {
    this.updateProgress();
  }

  updateProgress(){
    let finishedTasks = 0;
    this.tasks.forEach(function (task){
      if(task.finished){
        finishedTasks++;
      }
    });
    this.progress = (finishedTasks/this.tasks.length) * 100;
    console.log(this.progress);
  }

}
