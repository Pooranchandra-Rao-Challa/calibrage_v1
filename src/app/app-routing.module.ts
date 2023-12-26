import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';

const routes: Routes = [
  { path: '', loadChildren: () => import('src/app/pages/pages.module').then(m => m.PagesModule) },
  { path: 'pages', loadChildren: () => import('src/app/pages/pages.module').then((m) => m.PagesModule) },
  { path: 'services', loadChildren: () => import('src/app/services/services.module').then((m) => m.ServicesModule) },
  { path: 'company', loadChildren: () => import('src/app/company/company.module').then((m) => m.CompanyModule) },
  { path: '**', redirectTo: 'pages' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule] ,
})
export class AppRoutingModule { }
