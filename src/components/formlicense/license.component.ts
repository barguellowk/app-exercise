import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResponseLicensedCreate } from 'src/models/modelsResponse';
import { urlBase } from 'src/models/uriConst';

@Component({
  selector: 'form-license',
  templateUrl: './license.component.html'
})

export class FormLicenseComponent implements OnInit {
  createLicenseForm: FormGroup = new FormGroup({});
  deleteLicenseForm: FormGroup = new FormGroup({});
  responseCreate: any;
  show: boolean = false;

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  ngOnInit(): void {
    this.createLicenseForm = this.fb.group({
      applicationId: [null, [Validators.required, Validators.minLength(15)]],
      description: [null, [Validators.required, Validators.minLength(4)]],
      idOrganization: [null, [Validators.required, Validators.minLength(15)]]
    });

    this.deleteLicenseForm = this.fb.group({
      idMember: [null, [Validators.required, Validators.minLength(15)]],
      idLicense: [null, [Validators.required, Validators.minLength(15)]]
    })
  }

  createLicense(form: FormGroup<any>) {
    var body = { 'applicationId': form.value['applicationId'], 'description': form.value['description'] };
    this.http.post<ResponseLicensedCreate>(urlBase + 'License/CreateLicense' + form.value['idOrganization'], body, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }).subscribe(data => {
      this.responseCreate = data;
      if (data.error) {
        alert(data.error);
      } else {
        this.show = true;
      }
    })
  }

  deleteLicense(form: FormGroup<any>) {
    this.http.delete(urlBase + 'License/DeleteLicense?idMember=' + form.value['idMember'] + "&idLicense=" + form.value['idLicense']).subscribe(data => {
      if (!data) {
        alert("License with Id : " + form.value['idLicense'] + ' was remove successfull');
      } else {
        alert(data);
      }
      this.show = false;
    })
  }
}
