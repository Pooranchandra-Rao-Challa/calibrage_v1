import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './company/aboutus/aboutus.component';
import { LeadershipteamComponent } from './company/leadershipteam/leadershipteam.component';
import { CareersComponent } from './company/careers/careers.component';
import { BpoComponent } from './services/bpo/bpo.component';
import { BussinessintelligenceComponent } from './services/bussinessintelligence/bussinessintelligence.component';
import { ConsultancyComponent } from './services/consultancy/consultancy.component';
import { ContractprogrammingComponent } from './services/contractprogramming/contractprogramming.component';
import { EcommerceapplicationComponent } from './services/ecommerceapplication/ecommerceapplication.component';
import { EducationComponent } from './services/education/education.component';
import { MobileappComponent } from './services/mobileapp/mobileapp.component';
import { OtheritservicesComponent } from './services/otheritservices/otheritservices.component';
import { OutsourcingComponent } from './services/outsourcing/outsourcing.component';
import { PlcprogrammingComponent } from './services/plcprogramming/plcprogramming.component';
import { ProjectmanagementComponent } from './services/projectmanagement/projectmanagement.component';
import { TechnicalsupportComponent } from './services/technicalsupport/technicalsupport.component';
import { WebdesignComponent } from './services/webdesign/webdesign.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('src/app/pages/pages.module').then(m => m.PagesModule) },
  { path: 'pages', data: { breadcrumb: 'Pages' }, loadChildren: () => import('src/app/pages/pages.module').then((m) => m.PagesModule) },
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
  
  // { path: '', loadChildren: () => import('src/app/pages/pages.module').then(m => m.PagesModule) },
  // { path: 'pages', data: { breadcrumb: 'Pages' }, loadChildren: () => import('src/app/pages/pages.module').then((m) => m.PagesModule) },
  // { path: 'services', data: { breadcrumb: 'Services' }, loadChildren: () => import('src/app/services/services.module').then((m) => m.ServicesModule) },
  // { path: 'company', data: { breadcrumb: 'Company' }, loadChildren: () => import('src/app/company/company.module').then((m) => m.CompanyModule) },
  { path: '**', redirectTo: 'pages' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
