import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { IndustriesComponent } from './industries/industries.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PagesRoutingModule } from './pages-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    IndustriesComponent,
    ContactusComponent,
  ],
  imports: [
    PagesRoutingModule
  ]
})
export class PagesModule { }
