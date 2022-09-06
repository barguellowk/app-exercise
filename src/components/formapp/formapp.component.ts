import { DataSource } from '@angular/cdk/collections';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorResponse, ResponseCreateApp } from 'src/models/modelsResponse';
import { urlBase } from 'src/models/uriConst';

@Component({
    selector: 'form-app',
    templateUrl: './formapp.component.html'
})

export class FormAppcomponent implements OnInit {

    createAppForm: FormGroup = new FormGroup({});
    deleteAppForm: FormGroup = new FormGroup({});
    responseCreate : any;
    show = false;

    constructor(private fb: FormBuilder, private http: HttpClient) { }

    ngOnInit(): void {
        this.createAppForm = this.fb.group({
            name: [null, [Validators.required, Validators.minLength(4)]],
            url: [null, [Validators.required, Validators.minLength(6)]]
        });

        this.deleteAppForm = this.fb.group({
            idApplication: [null, [Validators.required, Validators.minLength(20)]]
        })
    }

    createApp(form: FormGroup<any>) {
        var body = JSON.stringify(form.value);
        this.http.post<ResponseCreateApp>(urlBase + 'App/CreateApp', body, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }).subscribe(data => {
            this.responseCreate = data;
            if(data.error){
                alert(data.error);
              }else{
                this.show = true;
              }
        })
    }

    deleteApp(form: FormGroup<any>) {
        this.http.delete(urlBase + 'App/DeleteApp?idApplication=' + form.value['idApplication']).subscribe(data => {
            if(!data)
            {
                alert("App with id : " + form.value['idApplication'] + ' was remove successfull');
            }else{
                var error = data as ErrorResponse
                if(error){
                    alert(error.Message);
                }
            }
            this.show = false;
        })
    }

}
