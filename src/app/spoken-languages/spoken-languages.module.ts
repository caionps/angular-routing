import { SpokenLanguagesComponent } from './spoken-languages.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpokenLanguagesRoutingModule } from './spoken-languages-routing.module';


@NgModule({
  declarations: [
    SpokenLanguagesComponent
  ],
  imports: [
    CommonModule,
    SpokenLanguagesRoutingModule
  ]
})
export class SpokenLanguagesModule { }
