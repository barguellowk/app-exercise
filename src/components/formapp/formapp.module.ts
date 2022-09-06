import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormAppcomponent } from './formapp.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        FormAppcomponent
    ],
    imports: [
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatListModule,
        CommonModule
    ],
    providers: [],
    exports: [
        FormAppcomponent
    ]
})
export class FormAppModule { }