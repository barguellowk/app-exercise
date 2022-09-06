import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResponseCreateIdentity } from 'src/models/modelsResponse';
import { urlBase } from 'src/models/uriConst';

@Component({
  selector: 'form-identity',
  templateUrl: './identity.component.html'
})

export class FormIdentitycomponent implements OnInit {
  createIdentityForm: FormGroup = new FormGroup({});
  deleteIdentityForm: FormGroup = new FormGroup({});
  responseCreate: any;
  show: boolean = false;

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  ngOnInit(): void {
    this.createIdentityForm = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(4)]],
      surname: [null, [Validators.required, Validators.minLength(4)]],
      language: [null, [Validators.required, Validators.minLength(3)]],
      country: [null, [Validators.required, Validators.minLength(1)]],
      password: [null, [Validators.required, Validators.minLength(4)]],
      email: [null, [Validators.required, Validators.minLength(10), Validators.email]]
    });

    this.deleteIdentityForm = this.fb.group({
      email: [null, [Validators.required, Validators.minLength(10), Validators.email]]
    })
  }

  createIdentity(form: FormGroup<any>) {
    var body = JSON.stringify(form.value);
    this.http.post<ResponseCreateIdentity>(urlBase + 'Identity/CreateIdentity', body, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }).subscribe(data => {
      this.responseCreate = data;
      if(data.error){
        alert(data.error);
      }else{
        this.show = true;
      }
    })
  }

  deleteIdentity(form: FormGroup<any>) {
    this.http.delete(urlBase + 'Identity/DeleteIdentity?email=' + form.value['email']).subscribe(data => {
      if (!data) {
        alert("Identity with email : " + form.value['email'] + ' was remove successfull');
      } else {
        alert(data);
      }
      this.show = false;
    })
  }
}
