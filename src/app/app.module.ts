import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobComponent } from './components/job/job.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './navigation/header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { JobCardComponent } from './components/job/job-card/job-card.component';
import { JobProgressComponent } from './components/job-progress/job-progress.component';
import { CompanyCardComponent } from './components/company-card/company-card.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { JobCreateComponent } from './components/job/job-create/job-create.component';
import {MatInputModule} from '@angular/material/input';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    JobComponent,
    HeaderComponent,
    JobCardComponent,
    JobProgressComponent,
    CompanyCardComponent,
    JobCreateComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatInputModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
