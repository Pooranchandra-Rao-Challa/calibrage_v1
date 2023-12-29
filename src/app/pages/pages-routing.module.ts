import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IndustriesComponent } from './industries/industries.component';
import { ContactusComponent } from './contactus/contactus.component';



@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'industries', component: IndustriesComponent },
    { path: 'contactUs', component: ContactusComponent },
  ])],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
