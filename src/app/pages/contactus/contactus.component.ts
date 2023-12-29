import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RG_ALPHA_ONLY, RG_EMAIL, RG_PHONE_NO } from 'src/app/shared/regex';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styles: [
  ]
})
export class ContactusComponent {
  fbcontactUs!: FormGroup;

  constructor(private formbuilder: FormBuilder,) {
  }

  ngOnInit() {
    this.contactForm();
  }
  get FormControls() {
    return this.fbcontactUs.controls;
  }
  contactForm() {
    this.fbcontactUs = this.formbuilder.group({
      fullName: new FormControl('', [Validators.required,Validators.pattern(RG_ALPHA_ONLY)]),
      mobileNumber: new FormControl('', [Validators.required,Validators.pattern(RG_PHONE_NO)]),
      emailId: new FormControl('', [Validators.required, Validators.pattern(RG_EMAIL)]),
      message: new FormControl('', [Validators.required])
    });
  }
}
