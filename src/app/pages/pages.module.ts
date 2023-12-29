import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { IndustriesComponent } from './industries/industries.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PagesService } from '../_services/pages.services';



@NgModule({
  declarations: [
    HomeComponent,
    IndustriesComponent,
    ContactusComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PagesRoutingModule
  ],
  providers:[PagesService]
})
export class PagesModule { }
