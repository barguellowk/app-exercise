import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReponseCreateOrganization } from 'src/models/modelsResponse';
import { urlBase } from 'src/models/uriConst';

@Component({
    selector: 'form-organization',
    templateUrl: './organization.component.html'
  })

  export class FormOrganizationComponent implements OnInit{
    createOrganizationForm: FormGroup = new FormGroup({});
    deleteOrganizationForm: FormGroup = new FormGroup({});
    responseCreate: any;
    show: boolean = false;
  
    constructor(private fb: FormBuilder, private http: HttpClient) { }
    ngOnInit(): void {
      this.createOrganizationForm = this.fb.group({
        allowTwitter: [false],
        allowWindows: [false],
        allowFacebook: [false],
        passwordCaducity: [false],
        country: [null, [Validators.required, Validators.minLength(2)]],
        city: [null, [Validators.required, Validators.minLength(4)]],
        postalCode: [null, [Validators.required, Validators.minLength(4)]],
        displayName: [null, [Validators.required, Validators.minLength(2)]],
        name: [null, [Validators.required, Validators.minLength(2)]],
        kind: [null, [Validators.required, Validators.minLength(2)]],
        passwordCaducityKind: [""],
        passwordCaducityCounter: [""],
        region: [""]
      });
  
      this.deleteOrganizationForm = this.fb.group({
        idOrganization: [null, [Validators.required, Validators.minLength(20)]]
      })
    }
  
    createOrganization(form: FormGroup<any>) {
      var body = JSON.stringify(form.value);
      this.http.post<ReponseCreateOrganization>(urlBase + 'Organization/CreateOrganization/', body, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }).subscribe(data => {
        this.responseCreate = data;
        if(data.error){
          alert(data.error);
        }else{
          this.show = true;
        }
      })
    }
  
    deleteOrganization(form: FormGroup<any>) {
      this.http.delete(urlBase + 'Organization/DeleteOrganization/?idOrganization=' + form.value['idOrganization']).subscribe(data => {
        if (!data) {
          alert("Organization with id : " + form.value['idOrganization'] + ' was remove successfull');
        } else {
          alert(data);
        }
        this.show = false;
      })
    }
  }
  