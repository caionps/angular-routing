import { NotFoundRoutingModule } from './not-found/not-found-routing.module';
import { NotFoundModule } from './not-found/not-found.module';
import { SpokenLanguagesRoutingModule } from './spoken-languages/spoken-languages-routing.module';
import { ProgramingLanguagesRoutingModule } from './programing-languages/programing-languages-routing.module';
import { SpokenLanguagesModule } from './spoken-languages/spoken-languages.module';
import { ProgramingLanguagesModule } from './programing-languages/programing-languages.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SpokenLanguagesComponent } from './spoken-languages/spoken-languages.component';
import { ProgramingLanguagesComponent } from './programing-languages/programing-languages.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SpokenLanguagesModule,
    SpokenLanguagesRoutingModule,
    ProgramingLanguagesModule,
    ProgramingLanguagesRoutingModule,
    NotFoundModule,
    NotFoundRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
