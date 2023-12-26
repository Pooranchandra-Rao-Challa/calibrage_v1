import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnicalsupportComponent } from './technicalsupport/technicalsupport.component';
import { ProjectmanagementComponent } from './projectmanagement/projectmanagement.component';
import { PlcprogrammingComponent } from './plcprogramming/plcprogramming.component';
import { OutsourcingComponent } from './outsourcing/outsourcing.component';
import { OtheritservicesComponent } from './otheritservices/otheritservices.component';
import { MobileappComponent } from './mobileapp/mobileapp.component';
import { EducationComponent } from './education/education.component';
import { EcommerceapplicationComponent } from './ecommerceapplication/ecommerceapplication.component';
import { ContractprogrammingComponent } from './contractprogramming/contractprogramming.component';
import { BussinessintelligenceComponent } from './bussinessintelligence/bussinessintelligence.component';
import { ConsultancyComponent } from './consultancy/consultancy.component';
import { BpoComponent } from './bpo/bpo.component';
import { WebdesignComponent } from './webdesign/webdesign.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ServiceRoutingModule } from './service-routing.module';



@NgModule({
  declarations: [
    TechnicalsupportComponent,
    ProjectmanagementComponent,
    PlcprogrammingComponent,
    OutsourcingComponent,
    OtheritservicesComponent,
    MobileappComponent,
    EducationComponent,
    EcommerceapplicationComponent,
    ContractprogrammingComponent,
    ConsultancyComponent,
    BussinessintelligenceComponent,
    BpoComponent,
    WebdesignComponent,
    SidebarComponent],
  imports: [
    ServiceRoutingModule
  ]
})
export class ServicesModule { }
