import { NgModule } from '@angular/core';
import { FormMemberComponent } from './member.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    declarations: [
        FormMemberComponent
    ],
    imports: [
        MatInputModule,
        MatFormFieldModule
    ],
    providers: [],
    exports: [
        FormMemberComponent
    ]
})
export class FormMemberModule { }