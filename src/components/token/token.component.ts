import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { urlBase } from '../../models/uriConst';
@Component({
  selector: 'token',
  templateUrl: './token.component.html'
})

export class FormTokencomponent {

  constructor(private http: HttpClient) { }

  public generateToken() {
    this.http.get(urlBase + 'Token/GenerateToken').subscribe(data => {
      alert(data);
    })
  }
}
