import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WebdesignComponent } from './webdesign/webdesign.component';
import { TechnicalsupportComponent } from './technicalsupport/technicalsupport.component';
import { BpoComponent } from './bpo/bpo.component';
import { CareersComponent } from '../company/careers/careers.component';
import { AboutusComponent } from '../company/aboutus/aboutus.component';
import { LeadershipteamComponent } from '../company/leadershipteam/leadershipteam.component';
import { ConsultancyComponent } from './consultancy/consultancy.component';
import { BussinessintelligenceComponent } from './bussinessintelligence/bussinessintelligence.component';
import { ContractprogrammingComponent } from './contractprogramming/contractprogramming.component';
import { EcommerceapplicationComponent } from './ecommerceapplication/ecommerceapplication.component';
import { MobileappComponent } from './mobileapp/mobileapp.component';
import { EducationComponent } from './education/education.component';
import { OtheritservicesComponent } from './otheritservices/otheritservices.component';
import { OutsourcingComponent } from './outsourcing/outsourcing.component';
import { PlcprogrammingComponent } from './plcprogramming/plcprogramming.component';
import { ProjectmanagementComponent } from './projectmanagement/projectmanagement.component';



const routes: Routes = [
  { path: 'aboutUs', component: AboutusComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'leadershipteam', component: LeadershipteamComponent },
  { path: 'bpo', component: BpoComponent },
  { path: 'bussinessintelligence', component: BussinessintelligenceComponent },
  { path: 'consultancy', component: ConsultancyComponent },
  { path: 'contract', component: ContractprogrammingComponent },
  { path: 'ecommerce', component: EcommerceapplicationComponent },
  { path: 'education', component: EducationComponent },
  { path: 'mobile', component: MobileappComponent },
  { path: 'other', component: OtheritservicesComponent },
  { path: 'outsourcing', component: OutsourcingComponent },
  { path: 'plc', component: PlcprogrammingComponent },
  { path: 'contractprogramming', component: ContractprogrammingComponent },
  { path: 'project', component: ProjectmanagementComponent },
  { path: 'technical', component: TechnicalsupportComponent },
  { path: 'webdesign', component: WebdesignComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }
