import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResponseRoleCreate } from 'src/models/modelsResponse';
import { urlBase } from 'src/models/uriConst';

@Component({
    selector: 'form-role',
    templateUrl: './role.component.html'
  })

  export class FormRoleComponent implements OnInit{
    createRoleForm: FormGroup = new FormGroup({});
    deleteRoleForm: FormGroup = new FormGroup({});
    responseCreate: any;
    show: boolean = false;
  
    constructor(private fb: FormBuilder, private http: HttpClient) { }
    ngOnInit(): void {
      this.createRoleForm = this.fb.group({
        licensedApplicationId: [null, [Validators.required, Validators.minLength(15)]],
        memberId: [null, [Validators.required, Validators.minLength(15)]],
      });
  
      this.deleteRoleForm = this.fb.group({
        idMember: [null, [Validators.required, Validators.minLength(15)]],
        idRole: [null, [Validators.required, Validators.minLength(15)]]
      })
    }
  
    createRole(form: FormGroup<any>) {
      var body = {'licensedApplicationId': form.value['licensedApplicationId']};
      this.http.post<ResponseRoleCreate>(urlBase + 'Role/CreateRole' + form.value['memberId'], body, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }).subscribe(data => {
        this.responseCreate = data;
        if (data.error) {
          alert(data.error);
        } else {
          this.show = true;
        }
      })
    }
  
    deleteRole(form: FormGroup<any>) {
      this.http.delete(urlBase + 'Role/DeleteRole?idMember=' + form.value['idMember'] + "&idRole=" + form.value['idRole']).subscribe(data => {
        if (!data) {
          alert("Role with Id : " + form.value['idRole'] + ' was remove successfull');
        } else {
          alert(data);
        }
        this.show = false;
      })
    }
  }
  