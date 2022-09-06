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
      grantType: [null, [Validators.required, Validators.minLength(4)]],
      clientId: [null, [Validators.required, Validators.minLength(4)]],
      clientSecret: [null, [Validators.required, Validators.minLength(4)]],
      scope: [null, [Validators.required, Validators.minLength(1)]]
    });
  }

  saveDetails(form: any) {
    var body = JSON.stringify(form.value);
    this.http.post(urlBase + 'Token/GenerateToken', body,  {headers : new HttpHeaders({ 'Content-Type': 'application/json' })}).subscribe(data => {
      alert(data);
    })
  }
}
