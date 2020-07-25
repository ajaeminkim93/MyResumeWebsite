import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { AboutmeComponent } from './aboutme/aboutme.component';

const routes: Routes = [
  { path: '', component: AboutmeComponent },
  { path: 'aboutme', component: AboutmeComponent},
  { path: 'resume', component: ResumeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
