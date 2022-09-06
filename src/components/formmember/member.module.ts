import { NgModule } from '@angular/core';
import { FormMemberComponent } from './member.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        FormMemberComponent
    ],
    imports: [
        MatInputModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatListModule,
        CommonModule
    ],
    providers: [],
    exports: [
        FormMemberComponent
    ]
})
export class FormMemberModule { }