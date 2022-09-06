import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResponseMemberCreate } from 'src/models/modelsResponse';
import { urlBase } from 'src/models/uriConst';

@Component({
  selector: 'form-member',
  templateUrl: './member.component.html'
})

export class FormMemberComponent implements OnInit {
  createMemberForm: FormGroup = new FormGroup({});
  deleteMemberForm: FormGroup = new FormGroup({});
  responseCreate: any;
  show: boolean = false;

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  ngOnInit(): void {
    this.createMemberForm = this.fb.group({

      identityId : [null, [Validators.required, Validators.minLength(4)]],
      organizationalUnitId:[null, [Validators.required, Validators.minLength(4)]],
      state : [null, [Validators.required, Validators.minLength(4)]],
      profileType : [null, [Validators.required, Validators.minLength(4)]]
    });

    this.deleteMemberForm = this.fb.group({
      idMember: [null, [Validators.required, Validators.minLength(10)]]
    })
  }

  createMember(form: FormGroup<any>) {
    var body = JSON.stringify(form.value);
    this.http.post<ResponseMemberCreate>(urlBase + 'Member/CreateMember', body, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }).subscribe(data => {
      this.responseCreate = data;
      if (data.error) {
        alert(data.error);
      } else {
        this.show = true;
      }
    })
  }

  deleteMember(form: FormGroup<any>) {
    this.http.delete(urlBase + 'Member/DeleteMember?idMember=' + form.value['idMember']).subscribe(data => {
      if (!data) {
        alert("Identity with email : " + form.value['idMember'] + ' was remove successfull');
      } else {
        alert(data);
      }
      this.show = false;
    })
  }
}
