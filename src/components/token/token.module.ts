import { NgModule } from '@angular/core';
import { FormTokencomponent } from './token.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        FormTokencomponent
    ],
    imports: [
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    exports: [
        FormTokencomponent
    ]
})
export class FormTokenModule { }