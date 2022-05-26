import { ProgramingLanguagesComponent } from './programing-languages.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramingLanguagesRoutingModule } from './programing-languages-routing.module';


@NgModule({
  declarations: [
    ProgramingLanguagesComponent
  ],
  imports: [
    CommonModule,
    ProgramingLanguagesRoutingModule
  ]
})
export class ProgramingLanguagesModule { }
