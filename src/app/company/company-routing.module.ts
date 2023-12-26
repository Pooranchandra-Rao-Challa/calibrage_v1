import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CareersComponent } from './careers/careers.component';
import { LeadershipteamComponent } from './leadershipteam/leadershipteam.component';



const routes: Routes = [
  { path: 'aboutUs', component: AboutusComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'leadershipteam', component: LeadershipteamComponent },
];

@NgModule({
imports: [RouterModule.forChild(routes), CommonModule],
exports: [RouterModule]
})
export class CompanyRoutingModule { }
