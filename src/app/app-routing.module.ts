import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobProgressComponent } from './components/job-progress/job-progress.component';
import { JobComponent } from './components/job/job.component';

const routes: Routes = [
  { path: 'job', component: JobComponent },
  { path: 'job-progress', component: JobProgressComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
