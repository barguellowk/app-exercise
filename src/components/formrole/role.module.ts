import { NgModule } from '@angular/core';
import { FormRoleComponent } from './role.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    declarations: [
        FormRoleComponent
    ],
    imports: [
        MatFormFieldModule,
        MatInputModule
    ],
    providers: [],
    exports: [
        FormRoleComponent
    ]
})
export class FormRoleModule { }