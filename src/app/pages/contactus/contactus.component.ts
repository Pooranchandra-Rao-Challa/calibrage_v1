import { HttpEvent } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ContactUsDto } from 'src/app/_models/pages';
import { PagesService } from 'src/app/_services/pages.services';
import { RG_ALPHA_ONLY, RG_EMAIL, RG_PHONE_NO } from 'src/app/shared/regex';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styles: [
  ]
})
export class ContactusComponent {
  fbcontactUs!: FormGroup;
  response:any;

  constructor(private formbuilder: FormBuilder, private pageService: PagesService) {
  }

  ngOnInit() {
    this.contactForm();
  }
  get FormControls() {
    return this.fbcontactUs.controls;
  }
  contactForm() {
    this.fbcontactUs = this.formbuilder.group({
      name: new FormControl('', [Validators.required, Validators.pattern(RG_ALPHA_ONLY)]),
      mobileNo: new FormControl('', [Validators.required, Validators.pattern(RG_PHONE_NO)]),
      emailId: new FormControl('', [Validators.required, Validators.pattern(RG_EMAIL)]),
      message: new FormControl('', [Validators.required])
    });
  }


  savecontactDetails(): Observable<HttpEvent<ContactUsDto>> {
    return this.pageService.CreateContact(this.fbcontactUs.value);
  }

  save() {
    console.log(this.fbcontactUs.value);
    if(this.fbcontactUs.valid){
      this.savecontactDetails().subscribe(resp => {
        this.response =resp;
      },
        (error) => {
          console.error('Error in POST request:', error);
        });  
    }
    this.fbcontactUs.reset();
  }
}
