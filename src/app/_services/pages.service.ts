import { Injectable } from '@angular/core';
import { ContactUsDto } from '../_models/pages';
import { ApiHttpService } from './api.http.service';
import { CREATE_CONTACT } from './api.uri.service';


@Injectable({
    providedIn: 'root'
})

export class PagesService  extends ApiHttpService {

    public CreateContact(data: ContactUsDto[]) {
      return this.post<ContactUsDto>(CREATE_CONTACT, data);
  }
}




