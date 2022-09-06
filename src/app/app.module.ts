import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTabsModule} from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormAppModule } from 'src/components/formapp/formapp.module';
import { FormIdentityModule } from 'src/components/formidentity/identity.module';
import { FormOrganizationModule } from 'src/components/formorganization/organization.module';
import { FormLicenseModule } from 'src/components/formlicense/license.module';
import { FormMemberModule } from 'src/components/formmember/member.module';
import { FormRoleModule } from 'src/components/formrole/role.module';
import { FormTokenModule } from 'src/components/formtoken/token.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatTabsModule,
    FormAppModule,
    FormIdentityModule,
    FormOrganizationModule,
    FormLicenseModule,
    FormMemberModule,
    FormRoleModule,
    FormTokenModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
