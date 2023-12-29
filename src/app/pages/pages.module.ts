import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { IndustriesComponent } from './industries/industries.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    HomeComponent,
    IndustriesComponent,
    ContactusComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
