import { NgModule } from '@angular/core';
import { FormRoleComponent } from './role.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        FormRoleComponent
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
        FormRoleComponent
    ]
})
export class FormRoleModule { }