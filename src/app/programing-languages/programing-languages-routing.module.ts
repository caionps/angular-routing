import { ProgramingLanguagesComponent } from './programing-languages.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: 'programming', component:ProgramingLanguagesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramingLanguagesRoutingModule { }
