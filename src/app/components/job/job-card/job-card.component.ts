import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Job } from 'src/app/classes/job';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent implements OnInit {
  @Input() job: Job = new Job();
  @Input() listCard = true;
  @Input() sizeImg = 20;
  @Input() sizeTxt = 80;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  jobProgress(id?: string){
    if(id != null){
      this.router.navigate(['/job-progress', id]);
    } else {
      alert("Something went wrong, please try again (later)!");
    }
  }

}
