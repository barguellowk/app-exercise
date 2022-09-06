import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { urlBase } from './../../models/uriConst';
@Component({
  selector: 'form-token',
  templateUrl: './token.component.html'
})

export class FormTokencomponent implements OnInit {

  tokenForm: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.tokenForm = this.fb.group({
      grantType: ["client_credentials"],
      clientId: ["becquer.arguello"],
      clientSecret: ["123456"],
      scope: ["WK.GraphAPI.Private"]
    });
  }

  saveDetails(form: any) {
    var body = JSON.stringify(form.value);
    this.http.post(urlBase + 'Token/GenerateToken', body,  {headers : new HttpHeaders({ 'Content-Type': 'application/json' })}).subscribe(data => {
      alert(data);
    })
  }
}
