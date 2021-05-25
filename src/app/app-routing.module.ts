import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { JobProgressComponent } from './components/job-progress/job-progress.component';
import { JobCreateComponent } from './components/job/job-create/job-create.component';
import { JobComponent } from './components/job/job.component';

const routes: Routes = [
  { path: 'job', component: JobComponent },
  { path: 'job-progress/:id', component: JobProgressComponent},
  { path: 'job-create', component: JobCreateComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
