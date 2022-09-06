import { NgModule } from '@angular/core';
import { FormLicenseComponent } from './license.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    declarations: [
        FormLicenseComponent
    ],
    imports: [
        MatInputModule,
        MatFormFieldModule
    ],
    providers: [],
    exports: [
        FormLicenseComponent
    ]
})
export class FormLicenseModule { }