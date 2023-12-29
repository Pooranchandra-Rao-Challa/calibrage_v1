import { Injectable } from '@angular/core';
import { ContactUsDto } from '../_models/pages';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})

export class PagesService {
 apiUrl = 'https://localhost:7215/hrmsapi/Account/CreateContact';

    constructor(private http: HttpClient) {}
  
    CreateContact(data: ContactUsDto){
      return this.http.post<any>(`${this.apiUrl}`, data);
    }
}




