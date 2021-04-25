import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-job-create',
  templateUrl: './job-create.component.html',
  styleUrls: ['./job-create.component.css'],  
  encapsulation: ViewEncapsulation.None
})
export class JobCreateComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
