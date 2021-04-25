import { Component, Input, OnInit } from '@angular/core';
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
  
  constructor() { }

  ngOnInit(): void {
  }

}
