import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ContactComponent } from './page/contact/contact.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "skills", component: SkillsComponent},
  { path: "experience", component: ExperienceComponent},
  { path: "contact", component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
